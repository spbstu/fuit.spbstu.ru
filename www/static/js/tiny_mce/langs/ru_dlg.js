



<!DOCTYPE html>
<html>
<head>
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "451d668734c3fad1cf300d7ea6bf0ef6";
 
 
 var CS_env = {"token":"451d668734c3fad1cf300d7ea6bf0ef6","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/12364374701854919368","projectName":"jce-rus","projectHomeUrl":"/p/jce-rus","absoluteBaseUrl":"http://code.google.com","relativeBaseUrl":"","urlPrefix":"p","loggedInUserEmail":"viitta@gmail.com"};
 </script>
 
 
 <title>ru_dlg.js - 
 jce-rus -
 
 
 Русификация JCE - Google Project Hosting
 </title>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/12364374701854919368/css/ph_core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/12364374701854919368/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/12364374701854919368/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/12364374701854919368/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 </style>
</head>
<body class="t4">
 <script type="text/javascript">
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-11960618-1'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 </script>
<div class="headbg">
 <div id="gaia">
 

 <span>
 
 
 <b>viitta@gmail.com</b>
 
 
 | <a href="/u/@VhVTSlJWBRZCWAQ%3D/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/@VhVTSlJWBRZCWAQ%3D/" onclick="_CS_click('/gb/ph/profile');" 
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fjce-rus%2Fsource%2Fbrowse%2Ftrunk%2Ftinymce%2Flangs%2Fru_dlg.js%3Fr%3D2" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>
 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->




 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <a href="/p/jce-rus/">
 
 <img src="http://www.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/jce-rus/">jce-rus</a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link" href="/p/jce-rus/" >Русификация JCE</a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/jce-rus/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/jce-rus/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 
 
 <a href="/p/jce-rus/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/jce-rus/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 
 
 <span class="inst1"><a href="/p/jce-rus/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/jce-rus/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/jce-rus/source/list">Changes</a></span> &nbsp;
 
 <form action="http://www.google.com/codesearch" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value + ' package:http://jce-rus\\.googlecode\\.com'">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 </form>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>
<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>


<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/jce-rus/source/browse/?r=2">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/jce-rus/source/browse/trunk/?r=2">trunk</a><span class="sp">/&nbsp;</span><a href="/p/jce-rus/source/browse/trunk/tinymce/?r=2">tinymce</a><span class="sp">/&nbsp;</span><a href="/p/jce-rus/source/browse/trunk/tinymce/langs/?r=2">langs</a><span class="sp">/&nbsp;</span>ru_dlg.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>r2</b></td>
 
 <td class="flipper">
 <ul class="rightside">
 
 <li><a href="/p/jce-rus/source/browse/trunk/tinymce/langs/ru_dlg.js?r=8" title="Next">r8&rsaquo;</a></li>
 
 </ul>
 </td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn2_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn2_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn2_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn2_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn2_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn2_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn2_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn2_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn2_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn2_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn2_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn2_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn2_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn2_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn2_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn2_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn2_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn2_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn2_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn2_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn2_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn2_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn2_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn2_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn2_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn2_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn2_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn2_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn2_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn2_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn2_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn2_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn2_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn2_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn2_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn2_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn2_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn2_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn2_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn2_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn2_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn2_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn2_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn2_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn2_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn2_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn2_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn2_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn2_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn2_50"

><td id="50"><a href="#50">50</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre class="prettyprint"><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn2_1

><td class="source">tinyMCE.addI18n(&#39;en.dlg&#39;,{<br></td></tr
><tr
id=sl_svn2_2

><td class="source">// JCE specific<br></td></tr
><tr
id=sl_svn2_3

><td class="source">modified: &#39;Èçìåíåí&#39;,<br></td></tr
><tr
id=sl_svn2_4

><td class="source">file: &#39;Ôàéë&#39;,<br></td></tr
><tr
id=sl_svn2_5

><td class="source">folder: &#39;Ïàïêà&#39;,<br></td></tr
><tr
id=sl_svn2_6

><td class="source">files: &#39;ôàéëû&#39;,<br></td></tr
><tr
id=sl_svn2_7

><td class="source">folders: &#39;ïàïêè&#39;,<br></td></tr
><tr
id=sl_svn2_8

><td class="source">comments: &#39;Êîììåíòàðèè&#39;,<br></td></tr
><tr
id=sl_svn2_9

><td class="source">size: &#39;Ðàçìåð&#39;,<br></td></tr
><tr
id=sl_svn2_10

><td class="source">preview: &#39;Ïðåäïðîñìîòð&#39;,<br></td></tr
><tr
id=sl_svn2_11

><td class="source">duration: &#39;Ïðîäîëæèòåëüíîñòü&#39;,<br></td></tr
><tr
id=sl_svn2_12

><td class="source">dimensions: &#39;Ðàçìåðû&#39;,<br></td></tr
><tr
id=sl_svn2_13

><td class="source">contents: &#39;Ñîäåðæèìîå&#39;,<br></td></tr
><tr
id=sl_svn2_14

><td class="source">unwritable: &#39;Íåò ïðàâ íà çàïèñü&#39;,<br></td></tr
><tr
id=sl_svn2_15

><td class="source">bad_name: &#39;Ïëîõîå èìÿ ôàéëà èëè ïàïêè&#39;,<br></td></tr
><tr
id=sl_svn2_16

><td class="source">message_tree: &#39;Ïîñòðîåíèå äåðåâà...&#39;,<br></td></tr
><tr
id=sl_svn2_17

><td class="source">message_load: &#39;Çàãðóçêà...&#39;,<br></td></tr
><tr
id=sl_svn2_18

><td class="source">message_properties: &#39;Ïîëó÷åíèå ñâîéñòâ...&#39;,<br></td></tr
><tr
id=sl_svn2_19

><td class="source">current_dir: &#39;Òåêóùàÿ ïàïêà: &#39;,<br></td></tr
><tr
id=sl_svn2_20

><td class="source">help: &#39;Ñïðàâêà&#39;,<br></td></tr
><tr
id=sl_svn2_21

><td class="source">name: &#39;Èìÿ&#39;,<br></td></tr
><tr
id=sl_svn2_22

><td class="source">uploading: &#39;Çàãðóçêà...&#39;,<br></td></tr
><tr
id=sl_svn2_23

><td class="source">upload: &#39;Çàãðóçêà&#39;,<br></td></tr
><tr
id=sl_svn2_24

><td class="source">queue: &#39;Î÷åðåäü&#39;,<br></td></tr
><tr
id=sl_svn2_25

><td class="source">upload_exits: &#39;Äåéñòâèå, åñëè ôàéë ñóùåñòâóåò: &#39;,<br></td></tr
><tr
id=sl_svn2_26

><td class="source">overwrite: &#39;Ïåðåçàïèñàòü ôàéë&#39;,<br></td></tr
><tr
id=sl_svn2_27

><td class="source">unique: &#39;Ñîçäàòü óíèêàëüíîå èìÿ&#39;,<br></td></tr
><tr
id=sl_svn2_28

><td class="source">cancel: &#39;Îòìåíà&#39;,<br></td></tr
><tr
id=sl_svn2_29

><td class="source">ok: &#39;OK&#39;,<br></td></tr
><tr
id=sl_svn2_30

><td class="source">browse: &#39;Îáçîð&#39;,<br></td></tr
><tr
id=sl_svn2_31

><td class="source">&#39;options&#39;: &#39;Îïöèè&#39;,<br></td></tr
><tr
id=sl_svn2_32

><td class="source">&#39;confirm&#39;: &#39;Ïîäòâåðäèòü&#39;,<br></td></tr
><tr
id=sl_svn2_33

><td class="source">yes: &#39;Äà&#39;,<br></td></tr
><tr
id=sl_svn2_34

><td class="source">no: &#39;Íåò&#39;,<br></td></tr
><tr
id=sl_svn2_35

><td class="source">&#39;alert&#39;: &#39;Óâåäîìëåíèå&#39;,<br></td></tr
><tr
id=sl_svn2_36

><td class="source">new_folder: &#39;Íîâàÿ ïàïêà&#39;,<br></td></tr
><tr
id=sl_svn2_37

><td class="source">rename: &#39;Ïåðåèìåíîâàòü&#39;,<br></td></tr
><tr
id=sl_svn2_38

><td class="source">&#39;delete&#39;: &#39;Óäàëèòü&#39;,<br></td></tr
><tr
id=sl_svn2_39

><td class="source">delete_folder_alert: &#39;Óäàëèòü ïàïêó?&#39;,<br></td></tr
><tr
id=sl_svn2_40

><td class="source">delete_file_alert: &#39;Óäàëèòü ôàéë(û)?&#39;,<br></td></tr
><tr
id=sl_svn2_41

><td class="source">rename_folder: &#39;Ïåðåèìåíîâàòü ïàïêó&#39;,<br></td></tr
><tr
id=sl_svn2_42

><td class="source">rename_file: &#39;Ïåðåèìåíîâàòü ôàéë&#39;,<br></td></tr
><tr
id=sl_svn2_43

><td class="source">rename_alert: &#39;Ïåðåèìåíîâàíèå ôàéëîâ è/èëè ïàïîê ñîáüåò ñóùåñòâóþùèå ññûëêè íà íèõ. Ïðîäîëæèòü?&#39;,<br></td></tr
><tr
id=sl_svn2_44

><td class="source">file_select: &#39;Êëèêíèòå íà ôàéëå äëÿ âñòàâêè, êëèêíèòå ñïðàâà îò èìåíè ôàéëà äëÿ ïðîñìîòðà åãî ñâîéñòâ. Èñïîëüçóéòå CTRL+Click äëÿ âûáîðà íåñêîëüêèõ ôàéëîâ.&#39;,<br></td></tr
><tr
id=sl_svn2_45

><td class="source">notwritable: &#39;Íåâîçìîæíî çàïèñàòü&#39;,<br></td></tr
><tr
id=sl_svn2_46

><td class="source">notwritable_desc: &#39;Íåâîçìîæíî çàïèñàòü::Ôàéë èëè ïàïêå íåäîñòóïíû íà çàïèñü è íå ìîãóò áûòü ïåðåèìåíîâàíû, ïåðåìåùåíû èëè óäàëåíû.&#39;,<br></td></tr
><tr
id=sl_svn2_47

><td class="source">bad_name: &#39;Ïëîõîå èìÿ ôàéëà èëè ïàïêè&#39;,<br></td></tr
><tr
id=sl_svn2_48

><td class="source">bad_name_desc: &#39;Ïëîõîå èìÿ ôàéëà èëè ïàïêè::Èìÿ ôàéëà èëè ïàïêè ìîæåò ñîäåðæàòü èñêëþ÷èòåëüíî ñèìâîëû a-zA-Z0-9_-.&#39;,<br></td></tr
><tr
id=sl_svn2_49

><td class="source">select_value: &#39;Äîáàâèòü çíà÷åíèå&#39;<br></td></tr
><tr
id=sl_svn2_50

><td class="source">});<br></td></tr
></table></pre>
<pre class="prettyprint"><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn2_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn2_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta('', 'p', 'jce-rus', this)">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta('', 'p', 'jce-rus', this)">Hide details</a>
 </div>
 <div class="ifExpand">
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/jce-rus/source/detail?spec=svn2&r=2">r2</a>
 by SkyLight.1011
 on Dec 7, 2009
 &nbsp; <a href="/p/jce-rus/source/diff?spec=svn2&r=2&amp;format=side&amp;path=/trunk/tinymce/langs/ru_dlg.js&amp;old_path=/trunk/tinymce/langs/ru_dlg.js&amp;old=">Diff</a>
 </div>
 <pre>Оригинальные файлы для перевода</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/jce-rus/source/detail?r=2&spec=svn2';
 var publish_url = '/p/jce-rus/source/detail?r=2&spec=svn2#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/admin');
 changed_urls.push('/p/jce-rus/source/browse/trunk/admin?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/admin/ru-RU.com_jce.ini');
 changed_urls.push('/p/jce-rus/source/browse/trunk/admin/ru-RU.com_jce.ini?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/admin/ru-RU.com_jce.menu.ini');
 changed_urls.push('/p/jce-rus/source/browse/trunk/admin/ru-RU.com_jce.menu.ini?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/ru-RU.com_jce.xml');
 changed_urls.push('/p/jce-rus/source/browse/trunk/ru-RU.com_jce.xml?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/site');
 changed_urls.push('/p/jce-rus/source/browse/trunk/site?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/site/ru-RU.com_jce.ini');
 changed_urls.push('/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce.ini?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/site/ru-RU.com_jce_advlink.ini');
 changed_urls.push('/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_advlink.ini?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/site/ru-RU.com_jce_browser.ini');
 changed_urls.push('/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_browser.ini?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/site/ru-RU.com_jce_imgmanager.ini');
 changed_urls.push('/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_imgmanager.ini?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/site/ru-RU.com_jce_media.ini');
 changed_urls.push('/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_media.ini?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/site/ru-RU.com_jce_paste.ini');
 changed_urls.push('/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_paste.ini?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/site/ru-RU.com_jce_spellchecker.ini');
 changed_urls.push('/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_spellchecker.ini?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/langs/ru.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/langs/ru.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/langs/ru_dlg.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/langs/ru_dlg.js?r\x3d2\x26spec\x3dsvn2');
 
 var selected_path = '/trunk/tinymce/langs/ru_dlg.js';
 
 
 changed_paths.push('/trunk/tinymce/plugins');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/advcode');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/advcode?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/advcode/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/advcode/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/advcode/langs/ru.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/advcode/langs/ru.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/advcode/langs/ru_dlg.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/advcode/langs/ru_dlg.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/advlink');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/advlink?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/advlink/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/advlink/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/advlink/langs/ru_dlg.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/advlink/langs/ru_dlg.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/article');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/article?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/article/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/article/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/article/langs/ru.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/article/langs/ru.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/article/langs/ru_dlg.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/article/langs/ru_dlg.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/browser');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/browser?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/browser/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/browser/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/browser/langs/ru_dlg.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/browser/langs/ru_dlg.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/caption');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/caption?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/caption/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/caption/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/emotions');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/emotions?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/emotions/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/emotions/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/emotions/langs/ru_dlg.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/emotions/langs/ru_dlg.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/imgmanager');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/imgmanager?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/imgmanager/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/imgmanager/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/imgmanager/langs/ru_dlg.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/imgmanager/langs/ru_dlg.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/searchreplace');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/searchreplace?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/searchreplace/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/searchreplace/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/searchreplace/langs/ru_dlg.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/searchreplace/langs/ru_dlg.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/style');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/style?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/style/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/style/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/style/langs/ru_dlg.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/style/langs/ru_dlg.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/table');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/table?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/table/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/table/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/table/langs/ru_dlg.js');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/table/langs/ru_dlg.js?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/xhtmlxtras');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/xhtmlxtras?r\x3d2\x26spec\x3dsvn2');
 
 
 changed_paths.push('/trunk/tinymce/plugins/xhtmlxtras/langs');
 changed_urls.push('/p/jce-rus/source/browse/trunk/tinymce/plugins/xhtmlxtras/langs?r\x3d2\x26spec\x3dsvn2');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/jce-rus/source/browse/trunk/admin?r=2&amp;spec=svn2"
 
 >/trunk/admin</option>
 
 <option value="/p/jce-rus/source/browse/trunk/admin/ru-RU.com_jce.ini?r=2&amp;spec=svn2"
 
 >/trunk/admin/ru-RU.com_jce.ini</option>
 
 <option value="/p/jce-rus/source/browse/trunk/admin/ru-RU.com_jce.menu.ini?r=2&amp;spec=svn2"
 
 >/trunk/admin/ru-RU.com_jce.menu.ini</option>
 
 <option value="/p/jce-rus/source/browse/trunk/ru-RU.com_jce.xml?r=2&amp;spec=svn2"
 
 >/trunk/ru-RU.com_jce.xml</option>
 
 <option value="/p/jce-rus/source/browse/trunk/site?r=2&amp;spec=svn2"
 
 >/trunk/site</option>
 
 <option value="/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce.ini?r=2&amp;spec=svn2"
 
 >/trunk/site/ru-RU.com_jce.ini</option>
 
 <option value="/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_advlink.ini?r=2&amp;spec=svn2"
 
 >...k/site/ru-RU.com_jce_advlink.ini</option>
 
 <option value="/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_browser.ini?r=2&amp;spec=svn2"
 
 >...k/site/ru-RU.com_jce_browser.ini</option>
 
 <option value="/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_imgmanager.ini?r=2&amp;spec=svn2"
 
 >...ite/ru-RU.com_jce_imgmanager.ini</option>
 
 <option value="/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_media.ini?r=2&amp;spec=svn2"
 
 >/trunk/site/ru-RU.com_jce_media.ini</option>
 
 <option value="/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_paste.ini?r=2&amp;spec=svn2"
 
 >/trunk/site/ru-RU.com_jce_paste.ini</option>
 
 <option value="/p/jce-rus/source/browse/trunk/site/ru-RU.com_jce_spellchecker.ini?r=2&amp;spec=svn2"
 
 >...e/ru-RU.com_jce_spellchecker.ini</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce?r=2&amp;spec=svn2"
 
 >/trunk/tinymce</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/langs?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/langs/ru.js?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/langs/ru.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/langs/ru_dlg.js?r=2&amp;spec=svn2"
 selected="selected"
 >/trunk/tinymce/langs/ru_dlg.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/advcode?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/advcode</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/advcode/langs?r=2&amp;spec=svn2"
 
 >...nk/tinymce/plugins/advcode/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/advcode/langs/ru.js?r=2&amp;spec=svn2"
 
 >...ymce/plugins/advcode/langs/ru.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/advcode/langs/ru_dlg.js?r=2&amp;spec=svn2"
 
 >.../plugins/advcode/langs/ru_dlg.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/advlink?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/advlink</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/advlink/langs?r=2&amp;spec=svn2"
 
 >...nk/tinymce/plugins/advlink/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/advlink/langs/ru_dlg.js?r=2&amp;spec=svn2"
 
 >.../plugins/advlink/langs/ru_dlg.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/article?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/article</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/article/langs?r=2&amp;spec=svn2"
 
 >...nk/tinymce/plugins/article/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/article/langs/ru.js?r=2&amp;spec=svn2"
 
 >...ymce/plugins/article/langs/ru.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/article/langs/ru_dlg.js?r=2&amp;spec=svn2"
 
 >.../plugins/article/langs/ru_dlg.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/browser?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/browser</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/browser/langs?r=2&amp;spec=svn2"
 
 >...nk/tinymce/plugins/browser/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/browser/langs/ru_dlg.js?r=2&amp;spec=svn2"
 
 >.../plugins/browser/langs/ru_dlg.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/caption?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/caption</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/caption/langs?r=2&amp;spec=svn2"
 
 >...nk/tinymce/plugins/caption/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/emotions?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/emotions</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/emotions/langs?r=2&amp;spec=svn2"
 
 >...k/tinymce/plugins/emotions/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/emotions/langs/ru_dlg.js?r=2&amp;spec=svn2"
 
 >...plugins/emotions/langs/ru_dlg.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/imgmanager?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/imgmanager</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/imgmanager/langs?r=2&amp;spec=svn2"
 
 >...tinymce/plugins/imgmanager/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/imgmanager/langs/ru_dlg.js?r=2&amp;spec=svn2"
 
 >...ugins/imgmanager/langs/ru_dlg.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/searchreplace?r=2&amp;spec=svn2"
 
 >...nk/tinymce/plugins/searchreplace</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/searchreplace/langs?r=2&amp;spec=svn2"
 
 >...ymce/plugins/searchreplace/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/searchreplace/langs/ru_dlg.js?r=2&amp;spec=svn2"
 
 >...ns/searchreplace/langs/ru_dlg.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/style?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/style</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/style/langs?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/style/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/style/langs/ru_dlg.js?r=2&amp;spec=svn2"
 
 >...ce/plugins/style/langs/ru_dlg.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/table?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/table</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/table/langs?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/table/langs</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/table/langs/ru_dlg.js?r=2&amp;spec=svn2"
 
 >...ce/plugins/table/langs/ru_dlg.js</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/xhtmlxtras?r=2&amp;spec=svn2"
 
 >/trunk/tinymce/plugins/xhtmlxtras</option>
 
 <option value="/p/jce-rus/source/browse/trunk/tinymce/plugins/xhtmlxtras/langs?r=2&amp;spec=svn2"
 
 >...tinymce/plugins/xhtmlxtras/langs</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/jce-rus/source/list?path=/trunk/tinymce/langs/ru_dlg.js&start=2">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 1729 bytes,
 50 lines</div>
 
 <div><a href="http://jce-rus.googlecode.com/svn-history/r2/trunk/tinymce/langs/ru_dlg.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/12364374701854919368/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/12364374701854919368/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/12364374701854919368/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn2': '/trunk/tinymce/langs/ru_dlg.js'}
 codereviews = CR_controller.setup(
 {"token":"451d668734c3fad1cf300d7ea6bf0ef6","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/12364374701854919368","projectName":"jce-rus","projectHomeUrl":"/p/jce-rus","absoluteBaseUrl":"http://code.google.com","relativeBaseUrl":"","urlPrefix":"p","loggedInUserEmail":"viitta@gmail.com"}, '', 'svn2', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/12364374701854919368/js/dit_scripts.js"></script>

 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/12364374701854919368/js/core_scripts.js"></script>
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
</div> 
<div id="footer" dir="ltr">
 
 <div class="text">
 
 &copy;2011 Google -
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>
 
 


 
 </body>
</html>

