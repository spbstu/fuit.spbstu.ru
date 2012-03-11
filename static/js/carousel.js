/**
 * 
 */

var Carousel = function() {
	this.mainContainer = null;
	this.itemsContanier = null;
	this.itemsContainerInner = null;
	this.leftButton = null;
	this.rightButton = null;
	this.resizeElement = null;
	this.scrollBar = {
		container : null,
		bar : null,
		enabled : false,
		dimension : null,
		caused : false
	};
	this.items = [];
	this.itemsForResize = [];
	this.settings = {
		itemElement : "li",
		speed : 50,
		itemsToShow : 1,
		scrollCount : 1,
		activeButtonClassName : "",
		buttonPressedClassName : {
			right : "",
			left : ""
		},
		endless : false,
		vertical : false,
		scrollSupport : true,
		dimensionAdjustOnResize : true
	};
	this.cssProperty = "left";
	this.dimension = {
		item : null,
		itemStart : null,
		items : []
	};
	this.current = {
		left : 1,
		right : this.settings.itemsToShow
	};
	this.moveInc = {
		left : 0,
		right : 0
	};
	this.maxAnimationTime = 1500;
	this.oneStepAnimationTime = 25;
	this.itemMargins = 0;
	this.itemsAdd = 0;
	this.moving = false;
	this.movingDisabled = false;
	this.movingFixed = false
};
Carousel.prototype.init = function(D) {
	var B = this;
	if (!D.elements
			|| !D.elements.mainContainer
			|| !(this.mainContainer = $("#" + D.elements.mainContainer))
			|| !this.mainContainer.length
			|| !D.elements.itemsContainer
			|| !(this.itemsContainer = $("#" + D.elements.itemsContainer))
			|| !this.itemsContainer.length
			|| !D.elements.itemsContainerInner
			|| !(this.itemsContainerInner = $("#"
					+ D.elements.itemsContainerInner))
			|| !this.itemsContainerInner.length || !D.elements.leftButton
			|| !(this.leftButton = $("#" + D.elements.leftButton))
			|| !this.leftButton.length || !D.elements.rightButton
			|| !(this.rightButton = $("#" + D.elements.rightButton))
			|| !this.rightButton.length) {
		return this.onError()
	}
	this.rightButton.active = false;
	this.leftButton.active = false;
	if (D.elements.scrollBarContainer
			&& D.elements.scrollBarBar
			&& (this.scrollBar.container = $("#"
					+ D.elements.scrollBarContainer))
			&& this.scrollBar.container.length
			&& (this.scrollBar.bar = $("#" + D.elements.scrollBarBar))
			&& this.scrollBar.bar.length) {
		this.scrollBar.enabled = true
	}
	if (D.settings) {
		this.settings.itemElement = D.settings.itemElement
				|| this.settings.itemElement
	}
	this.itemsContainerInner.css(this.cssProperty, "0px");
	this.items = this.itemsContainerInner.find(this.settings.itemElement);
	if (D.settings) {
		if (D.settings.speed && D.settings.speed <= 100 && D.settings.speed > 0) {
			this.settings.speed = D.settings.speed
		}
		if (D.settings.itemsToShow && !isNaN(D.settings.itemsToShow)
				&& D.settings.itemsToShow > 0
				&& this.items.length >= D.settings.itemsToShow) {
			this.settings.itemsToShow = D.settings.itemsToShow
		}
		if (D.settings.scrollCount && !isNaN(D.settings.scrollCount)
				&& (D.settings.scrollCount < this.items.length)) {
			this.settings.scrollCount = D.settings.scrollCount
		}
		this.settings.activeButtonClassName = D.settings.activeButtonClassName
				|| this.settings.activeButtonClassName;
		if (D.settings.buttonPressedClassName
				&& D.settings.buttonPressedClassName.left
				&& D.settings.buttonPressedClassName.right) {
			this.settings.buttonPressedClassName.left = D.settings.buttonPressedClassName.left;
			this.settings.buttonPressedClassName.right = D.settings.buttonPressedClassName.right
		}
		if (D.settings.endless) {
			this.settings.endless = D.settings.endless;
			this.itemsAdd = this.settings.itemsToShow;
			this.scrollBar.enabled = false
		}
		if (typeof D.settings.vertical != "undefined") {
			this.settings.vertical = D.settings.vertical
		}
		if (this.settings.vertical) {
			this.cssProperty = "top"
		}
		if (typeof D.settings.scrollSupport != "undefined") {
			this.settings.scrollSupport = D.settings.scrollSupport
		}
		if (typeof D.settings.dimensionAdjustOnResize != "undefined") {
			this.settings.dimensionAdjustOnResize = D.settings.dimensionAdjustOnResize
		}
		if (!this.settings.dimensionAdjustOnResize) {
			this.settings.endless = false
		}
	}
	if (!this.items.length) {
		return this.onError()
	}
	this.current.right = this.settings.itemsToShow;
	if (this.items.length && this.items.length < this.settings.itemsToShow) {
		this.current.right = this.items.length
	}
	if (this.settings.endless) {
		var C = this.itemsContainerInner.find(this.settings.itemElement
				+ ":first");
		this.items.each(function(F, E) {
			if (F < B.settings.itemsToShow) {
				$(E).clone().insertAfter(
						B.itemsContainerInner.find(B.settings.itemElement
								+ ":last"))
			}
			if (F > (B.items.length - B.settings.itemsToShow - 1)) {
				$(E).clone().insertBefore(C)
			}
		})
	}
	this.itemsForResize = this.itemsContainerInner
			.find(this.settings.itemElement);
	this.resizeElement = this.itemsContainer.find(".resize");
	if (!this.resizeElement.length) {
		this.resizeElement = this.itemsContainer
	}
	if (this.settings.vertical) {
		this.itemMargins = this.items.outerHeight(true)
				- this.items.innerHeight();
		this.dimension.itemStart = this.items.innerHeight();
		if (this.dimensisonAdjustOnResize) {
			this.itemsContainer.css("min-height", this.settings.itemsToShow
					* (this.dimension.itemStart + this.itemMargins))
		}
	} else {
		this.itemMargins = this.items.outerWidth(true)
				- this.items.innerWidth();
		this.dimension.itemStart = this.items.innerWidth();
		if (this.dimensisonAdjustOnResize) {
			this.itemsContainer.css("min-width", this.settings.itemsToShow
					* (this.dimension.itemStart + this.itemMargins))
		}
	}
	this.itemsForResize.each(function(E) {
		B.dimension.items[E] = B.settings.vertical ? $(this).innerHeight() : $(
				this).innerWidth()
	});
	this.recalculateOnResize();
	this.moveInc.left = Math.round(this.dimension.item / 8
			* (this.settings.speed / 100));
	this.moveInc.right = -this.moveInc.left;
	if (this.settings.endless) {
		this.setButtonActive(this.rightButton);
		this.setButtonActive(this.leftButton)
	} else {
		this.setButtonActive(this.rightButton)
	}
	var A = {
		rightButtonMouseDown : function() {
			if (B.settings.buttonPressedClassName.right) {
				$(this).addClass(B.settings.buttonPressedClassName.right)
			}
			if (!B.moving) {
				B.movingDisabled = false;
				B.scrollBar.caused = false;
				B.move(B.settings.scrollCount, true)
			}
			return false
		},
		leftButtonMouseDown : function() {
			if (B.settings.buttonPressedClassName.left) {
				$(this).addClass(B.settings.buttonPressedClassName.left)
			}
			if (!B.moving) {
				B.movingDisabled = false;
				B.scrollBar.caused = false;
				B.move(-B.settings.scrollCount, true)
			}
			return false
		},
		mouseWheel : function(E, F) {
			if (!B.moving) {
				B.movingDisabled = false;
				B.scrollBar.caused = false;
				F = -F / Math.abs(F);
				B.move(F)
			}
			return false
		},
		mouseUp : function() {
			if (!B.movingDisabled) {
				if (B.settings.buttonPressedClassName.left) {
					B.leftButton
							.removeClass(B.settings.buttonPressedClassName.left)
				}
				if (B.settings.buttonPressedClassName.right) {
					B.rightButton
							.removeClass(B.settings.buttonPressedClassName.right)
				}
				B.movingDisabled = true
			}
		},
		windowResize : function() {
			B.recalculateOnResize()
		},
		scrollBarContainerClick : function(H) {
			if ($(H.target).attr("class") == B.scrollBar.bar.attr("class")) {
				return false
			}
			var F = B.settings.vertical ? (H.pageY - $(this).offset().top)
					: (H.pageX - $(this).offset().left);
			var G = B.settings.vertical ? ($(this).height() - B.scrollBar.bar
					.outerHeight(true)) : ($(this).width() - B.scrollBar.bar
					.outerWidth(true));
			if (F > G) {
				F = G
			}
			var E = Math.round(F / B.scrollBar.dimension);
			E = (E > B.items.length - 1) ? B.items.length - 1 : E;
			B.scrollBar.bar.css(B.cssProperty, F);
			if (B.current.left - 1 != E) {
				B.scrollBar.caused = true
			}
			B.moveTo(E)
		}
	};
	this.rightButton.mousedown(A.rightButtonMouseDown);
	this.leftButton.mousedown(A.leftButtonMouseDown);
	if (this.settings.scrollSupport) {
		this.mainContainer.mousewheel(A.mouseWheel)
	}
	$(window).resize(A.windowResize);
	$(document).mouseup(A.mouseUp);
	if (this.scrollBar.enabled) {
		if (this.settings.vertical) {
			this.scrollBar.container.height(this.itemsContainer.height());
			this.scrollBar.dimension = Math.round(this.scrollBar.container
					.innerHeight()
					/ this.items.length);
			this.scrollBar.bar.height(parseInt(this.settings.itemsToShow
					* this.scrollBar.container.innerHeight()
					/ this.items.length))
		} else {
			this.scrollBar.container.width(this.itemsContainer.width());
			this.scrollBar.dimension = Math.round(this.scrollBar.container
					.width()
					/ this.items.length);
			this.scrollBar.bar.width(parseInt(this.settings.itemsToShow
					* this.scrollBar.container.width() / this.items.length))
		}
		this.scrollBar.container.click(A.scrollBarContainerClick);
		this.scrollBar.bar.draggable({
			right : this.settings.vertical ? -1 : 0,
			bottom : this.settings.vertical ? 0 : -1,
			discreet : {
				dimension : {
					y : B.scrollBar.dimension,
					x : B.scrollBar.dimension
				},
				fire : function(E) {
					if (!B.moving) {
						B.movingDisabled = false;
						var F = B.settings.vertical ? E.y : E.x;
						if (B.current.left < (F + 1)) {
							B.scrollBar.caused = true;
							B.move(+1)
						}
						if (B.current.right > (B.settings.itemsToShow + F)) {
							B.scrollBar.caused = true;
							B.move(-1)
						}
					}
				}
			},
			end : function(E) {
				B.moveTo(B.settings.vertical ? E.y : E.x)
			}
		})
	}
	$(window).unload(
			function() {
				if (A) {
					B.rightButton.unbind("click", A.rightButtonMouseDown);
					A.rightButtonMouseDown = null;
					B.leftButton.unbind("click", A.leftButtonMouseDown);
					A.leftButtonMouseDown = null;
					B.mainContainer.unbind("mousewheel", A.mouseWheel);
					A.mouseWheel = null;
					if (B.scrollBar.container) {
						B.scrollBar.container.unbind("click",
								A.scrollBarContainerClick)
					}
					$(document).unbind("mouseup", A.mouseUp);
					A.mouseUp = null;
					$(window).unbind("resize", A.windowResize);
					A.windowResize = null;
					B = null
				}
			})
};
Carousel.prototype.move = function(B, A) {
	if (!isNaN(B) && (B != 0) && !this.movingDisabled && !this.moving) {
		if (this.settings.endless) {
			if (this.current.right == (this.items.length + this.settings.itemsToShow)) {
				this.itemsContainerInner.css(this.cssProperty, -this
						.getItemOffset(this.settings.itemsToShow));
				this.current.left = 1;
				this.current.right = this.settings.itemsToShow
			}
			if (this.current.left == 1 - this.settings.itemsToShow) {
				this.itemsContainerInner.css(this.cssProperty, -this
						.getItemOffset(this.items.length));
				this.current.right = this.items.length;
				this.current.left = this.items.length
						- this.settings.itemsToShow + 1
			}
		} else {
			if ((B > 0 && this.current.right == this.items.length)
					|| (B < 0 && this.current.left == 1)) {
				return false
			}
		}
		this.moving = true;
		if (!this.settings.endless) {
			if (B > 0) {
				B = this.current.right + B > this.items.length ? this.items.length
						- this.current.right
						: B
			} else {
				B = this.current.left + B < 1 ? -(this.current.left - 1) : B
			}
		}
		if (A) {
			this.moveMargin = -this.getItemOffset(this.current.left
					+ this.itemsAdd + B - 1);
			this.currentIterations = 0;
			this.moveIntervalId = setInterval((function(C) {
				return function() {
					C.moveStep(B)
				}
			})(this), this.oneStepAnimationTime)
		} else {
			this.moveMargin = -this.getItemOffset(this.current.left
					+ this.itemsAdd + B - 1);
			this.itemsContainerInner.css(this.cssProperty, this.moveMargin);
			this.moveFinishedHandler(B)
		}
	}
};
Carousel.prototype.moveStep = function(A) {
	if (this.movingDisabled
			&& ((A > 0 && (parseInt(this.itemsContainerInner
					.css(this.cssProperty)) <= this.moveMargin)) || ((A < 0) && (parseInt(this.itemsContainerInner
					.css(this.cssProperty)) >= this.moveMargin)))) {
		clearInterval(this.moveIntervalId);
		this.moveFinishedHandler(A / Math.abs(A));
		return false
	}
	if (A > 0) {
		if ((parseInt(this.itemsContainerInner.css(this.cssProperty)) <= -this
				.getItemOffset(this.current.left + this.itemsAdd))
				&& (parseInt(this.itemsContainerInner.css(this.cssProperty)) > -this
						.getItemOffset(this.current.left + this.itemsAdd + 1))) {
			this.current.left++;
			this.current.right++;
			this.currentIterations++;
			this.handleScrollBarPosition();
			if (this.currentIterations == Math.abs(A) && !this.movingFixed) {
				this.moveMargin = -this.getItemOffset(this.current.left
						+ this.itemsAdd + A - 1);
				this.currentIterations = 0
			}
			if (this.settings.endless) {
				if (this.current.right == (this.items.length + this.settings.itemsToShow)) {
					this.itemsContainerInner.css(this.cssProperty, -this
							.getItemOffset(this.settings.itemsToShow));
					this.current.left = 1;
					this.current.right = this.itemsAdd;
					this.moveMargin = -this.getItemOffset(A
							- this.currentIterations + this.itemsAdd)
				}
			} else {
				if (this.current.right == this.items.length) {
					clearInterval(this.moveIntervalId);
					this.moveFinishedHandler(0);
					return false
				}
			}
		}
		if ((parseInt(this.itemsContainerInner.css(this.cssProperty)) + this.moveInc.right) <= this.moveMargin) {
			this.itemsContainerInner.css(this.cssProperty, this.moveMargin)
		} else {
			this.itemsContainerInner.css(this.cssProperty,
					parseInt(this.itemsContainerInner.css(this.cssProperty))
							+ this.moveInc.right);
			if (this.movingFixed) {
				this.movingDisabled = true
			}
		}
	} else {
		if ((parseInt(this.itemsContainerInner.css(this.cssProperty)) < -this
				.getItemOffset(this.current.left + this.itemsAdd - 3))
				&& (parseInt(this.itemsContainerInner.css(this.cssProperty)) >= -this
						.getItemOffset(this.current.left + this.itemsAdd - 2))) {
			this.current.left--;
			this.current.right--;
			this.currentIterations++;
			this.handleScrollBarPosition();
			if (this.currentIterations == Math.abs(A) && !this.movingFixed) {
				this.moveMargin = -this.getItemOffset(this.current.left
						+ this.itemsAdd + A - 1);
				this.currentIterations = 0
			}
			if (this.settings.endless) {
				if (this.current.left == 1 - this.settings.itemsToShow) {
					this.itemsContainerInner.css(this.cssProperty, -this
							.getItemOffset(this.items.length));
					this.current.right = this.items.length;
					this.current.left = this.items.length - this.itemsAdd + 1;
					this.moveMargin = -this.getItemOffset(this.current.right
							+ this.currentIterations + A)
				}
			} else {
				if (this.current.left == 1) {
					clearInterval(this.moveIntervalId);
					this.moveFinishedHandler(0);
					return false
				}
			}
		}
		if ((parseInt(this.itemsContainerInner.css(this.cssProperty)) + this.moveInc.left) >= this.moveMargin) {
			this.itemsContainerInner.css(this.cssProperty, this.moveMargin)
		} else {
			this.itemsContainerInner.css(this.cssProperty,
					parseInt(this.itemsContainerInner.css(this.cssProperty))
							+ this.moveInc.left);
			if (this.movingFixed) {
				this.movingDisabled = true
			}
		}
	}
};
Carousel.prototype.moveFinishedHandler = function(A) {
	this.current.right += A;
	this.current.left += A;
	if (!this.settings.endless) {
		if (this.current.left == 1) {
			this.setButtonInactive(this.leftButton)
		} else {
			this.setButtonActive(this.leftButton)
		}
		if (this.current.right == this.items.length) {
			this.setButtonInactive(this.rightButton)
		} else {
			this.setButtonActive(this.rightButton)
		}
	}
	this.handleScrollBarPosition();
	this.scrollBar.caused = false;
	this.movingFixed = false;
	this.moving = false;
	return false
};
Carousel.prototype.recalculateOnResize = function() {
	var A = this;
	if (this.itemsContainer.is(":visible")) {
		var B = Math.ceil((this.settings.vertical ? this.itemsContainer
				.innerHeight(true) : this.itemsContainer.innerWidth())
				/ this.settings.itemsToShow);
		this.dimension.item = B;
		if (this.settings.dimensionAdjustOnResize) {
			if (!this.settings.vertical) {
				if (B < this.dimension.itemStart) {
					this.dimension.item = this.dimension.itemStart
							+ this.itemMargins;
					this.resizeElement.width(this.settings.itemsToShow
							* this.dimension.item)
				} else {
					this.itemsContainer.css("width", "auto")
				}
			} else {
				this.resizeElement.height(this.settings.itemsToShow
						* this.dimension.item)
			}
			this.itemsForResize.each(function(C) {
				if (A.settings.vertical) {
					$(this).height(A.dimension.item - A.itemMargins);
					A.dimension.items[C] = $(this).outerHeight(true)
				} else {
					$(this).width(A.dimension.item - A.itemMargins);
					A.dimension.items[C] = $(this).outerWidth(true)
				}
			});
			this.itemsContainerInner.css(this.cssProperty, -this
					.getItemOffset(this.current.left + this.itemsAdd - 1))
		}
	}
};
Carousel.prototype.setButtonInactive = function(A) {
	if (A.active && this.settings.activeButtonClassName) {
		A.removeClass(this.settings.activeButtonClassName);
		A.active = false
	}
};
Carousel.prototype.setButtonActive = function(A) {
	if (!A.active && this.settings.activeButtonClassName) {
		A.addClass(this.settings.activeButtonClassName);
		A.active = true
	}
};
Carousel.prototype.handleScrollBarPosition = function() {
	if (this.scrollBar.enabled && !this.scrollBar.caused
			&& this.scrollBar.dimension) {
		this.scrollBar.bar
				.css(
						this.cssProperty,
						this.current.right == this.items.length ? parseInt(this.scrollBar.container
								.innerHeight()
								- this.scrollBar.bar.outerHeight(true))
								: (this.current.left - 1)
										* this.scrollBar.dimension)
	}
};
Carousel.prototype.getItemOffset = function(C) {
	var B = 0;
	if (C > 0) {
		for ( var A = 0; A < C; A++) {
			if (this.dimension.items[A]) {
				B += this.dimension.items[A]
			}
		}
	} else {
		for ( var A = this.dimension.items.length + C; A < this.dimension.items.length; A++) {
			if (this.dimension.items[A]) {
				B -= this.dimension.items[A]
			}
		}
	}
	return B
};
Carousel.prototype.moveTo = function(B, A) {
	if (!isNaN(B) && this.items[B] && !this.moving
			&& ((this.current.left - 1) != B)) {
		this.movingDisabled = false;
		this.movingFixed = true;
		this.move(B + 1 - this.current.left, A);
		return true
	}
	return false
};
Carousel.prototype.onError = function() {
	this.mainContainer.hide();
	return false
};