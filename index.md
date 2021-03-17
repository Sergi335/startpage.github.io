<script>$(document).ready(function () { $("#mySidenav").on('click', function(e){ if (e.target !== this) return; $("#mySidenav").toggleClass("sidenav-hide"); $("#main").toggleClass("main-hide"); $("#menumovil").toggleClass("menumovil-hide"); $(".enlaces").slideToggle("600", "swing"); }); });</script> <script>$(document).ready(function () { $("#menumovil").on('click', function(e){ if (e.target !== this) return; $("#mySidenav").toggleClass("sidenav-hide"); $("#main").toggleClass("main-hide"); $("#menumovil").toggleClass("menumovil-hide"); $(".enlaces").slideToggle("600", "swing"); }); });</script> <script>$( document ).ready(function() { $("#logo").click(function(){ $("#buscar").toggleClass('visible') }); });</script> <script>$( document ).ready(function() { $("#logo").click(function(){ $("#buscar").focus() }); });</script> <script>$( document ).ready(function() { $("#add").click(function(){ $("#inicio").toggleClass('visible2') $(".fila").toggleClass('visible2') }); });</script> <script>$(document).ready(function(){ $("#clima").click(function(){ $("#weather").slideToggle("slow"); }); });</script> <script>function colorEnlaces(e){ var fecha = new Date(), hora = fecha.getHours(); if (hora >= 6 && hora <= 14 && e.target.className == 'links') { e.target.parentNode.style.backgroundColor = "rgba(0, 99, 177,.6)"; } if (hora > 14 && hora < 20 && e.target.className == 'links') { e.target.parentNode.style.backgroundColor = "rgba(85, 177, 0,.6)"; } if (hora >= 20 || hora < 6 && e.target.className == 'links') { e.target.parentNode.style.backgroundColor = "rgba(0, 0, 0,.6)"; } } function colorEnlaces2(e){ if (e.target.className == 'links'){ e.target.parentNode.style.backgroundColor = ""; } } $(document).ready(function(){ $('a, img').on('mousemove', colorEnlaces); $('a, img').on('mouseout', colorEnlaces2); });</script>

<div id="mySidenav" class="sidenav">

<div class="enlaces">[Inicio](#) [Desarrollo Web Front](#) [Desarrollo Web Back](#) [Tareas - Notas](#)</div>

</div>

<div id="main" class="main">![](images/ic_menu_white_48dp.png)

<div class="superior">

<div class="celda2">

<div class="botones">![](images/ic_search_white_48dp.png) ![](images/ic_bookmark_outline_white_24dp.png) ![](images/ic_settings_white_48dp.png) ![](images/ic_filter_drama_white_48dp.png)</div>

</div>

</div>

<div class="controles">

<form id="busqueda" class="oculto" action="https://google.com/search" type="GET"><input id="buscar" type="search" name="q" autofocus="">  
</form>

</div>

<div id="inicio" class="filas tabcontent oculto2">

<div class="centrar">

<div class="fila oculto2">

### Inicio

<div class="tile">[![google](https://www.google.com/s2/favicons?domain=https://google.es)Google](https://google.es)</div>

<div class="tile">[![gmail](images/gmail.png)Gmail](https://mail.google.com/mail/u/0/?tab=wm#inbox)</div>

<div class="tile">[![outlook](images/outlook.png)Outlook](https://outlook.live.com/mail/)</div>

<div class="tile">[![moodle](https://www.google.com/s2/favicons?domain=http://fp.edu.gva.es/av/)Aula FP](http://fp.edu.gva.es/av/)</div>

<div class="tile">[![Alerta Digital](https://www.google.com/s2/favicons?domain=www.alertadigital.com)Alerta Digital](http://www.alertadigital.com/)</div>

<div class="tile">[![20 Minutos](images/20Minutos.svg)20 Minutos](http://www.20minutos.es/)</div>

<div class="tile">[![Infojobs](images/infojobs.png)Infojobs](https://www.infojobs.net/candidate/my-infojobs.xhtml?dgv=1660446257568886965&nocache=true)</div>

<div class="tile">[![Hispashare](images/hispashare.png)Hispashare](http://www.hispashare.com/)</div>

<div class="tile">[![torrentlocura](https://www.google.com/s2/favicons?domain=https://descargas2020.org/)Descargas 2020](https://descargas2020.org/)</div>

<div class="tile">[![limetorrents](images/Kickasstorrents.png)KickassTorrents Música](https://katcr.co/category/music/subcate/lossless/page/)</div>

<div class="tile">[![limetorrents](https://www.google.com/s2/favicons?domain=http://1337x.is/)1337X Lossless](http://1337x.is/sub/23/0/)</div>

<div class="tile">[![Papaly](images/papaly.png)Papaly](https://papaly.com/)</div>

<div class="tile">[![favinks](https://www.google.com/s2/favicons?domain=https://favinks.com/)Favinks](https://favinks.com/)</div>

<div class="tile">[![Chrome Store](images/chromestore.png)Chrome Web Store](https://chrome.google.com/webstore/category/extensions)</div>

<div class="tile">[![Play Store](https://www.google.com/s2/favicons?domain=https://play.google.com/store)Play Store](https://play.google.com/store)</div>

<div class="tile">[![esRadio](https://www.google.com/s2/favicons?domain=https://esradio.libertaddigital.com/)esRadio](https://esradio.libertaddigital.com/)</div>

<div class="tile">[![atrespalos](https://www.google.com/s2/favicons?domain=https://atrespalos.com/)atrespalos](https://atrespalos.com/)</div>

</div>

<div class="fila oculto2">

### Noticias Tecnología

<div class="tile">[![Noticias 3D](https://www.google.com/s2/favicons?domain=www.noticias3d.com)Noticias 3D](https://www.noticias3d.com/)</div>

<div class="tile">[![Hardzone](https://www.google.com/s2/favicons?domain=hardzone.es)Hardzone](https://hardzone.es/)</div>

<div class="tile">[![chapuzas](https://www.google.com/s2/favicons?domain=elchapuzasinformatico.com)El Chapuzas Informático](https://elchapuzasinformatico.com/)</div>

<div class="tile">[![Xataka](https://www.google.com/s2/favicons?domain=xataka.com)Xataka](https://www.xataka.com/)</div>

<div class="tile">[![Xataka Android](https://www.google.com/s2/favicons?domain=xatakandroid.com)Xataka Android](https://www.xatakandroid.com/)</div>

<div class="tile">[![Whatsnew](https://www.google.com/s2/favicons?domain=wwwhatsnew.com)WhatsNew](https://wwwhatsnew.com/)</div>

<div class="tile">[![Xataka Home](https://www.google.com/s2/favicons?domain=xatakahome.com)Xataka Smart Home](https://www.xatakahome.com/?utm_source=xatakawindows&utm_medium=network&utm_campaign=galaxia)</div>

<div class="tile">[![Xataka Windows](https://www.google.com/s2/favicons?domain=xatakawindows.com)Xataka Windows](https://www.xatakawindows.com/?utm_source=genbeta&utm_medium=network&utm_campaign=favicons)</div>

<div class="tile">[![Gizmodo](https://www.google.com/s2/favicons?domain=es.gizmodo.com)Gizmodo](http://es.gizmodo.com/)</div>

<div class="tile">[![Genbeta](https://www.google.com/s2/favicons?domain=genbeta.com)Genbeta](https://www.genbeta.com/?utm_source=xataka&utm_medium=network&utm_campaign=favicons)</div>

<div class="tile">[![Softzone](https://www.google.com/s2/favicons?domain=softzone.es)Softzone](https://www.softzone.es/)</div>

<div class="tile">[![Redeszone](https://www.google.com/s2/favicons?domain=redeszone.net)Redeszone](https://www.redeszone.net/)</div>

<div class="tile">[![Ubunlog](https://www.google.com/s2/favicons?domain=ubunlog.com)Ubunlog](https://ubunlog.com/)</div>

<div class="tile">[![Linuxadictos](https://www.google.com/s2/favicons?domain=linuxadictos.com)Linuxadictos](https://www.linuxadictos.com/)</div>

<div class="tile">[![desdelinux](https://www.google.com/s2/favicons?domain=blog.desdelinux.net)DesdeLinux](https://blog.desdelinux.net/)</div>

<div class="tile">[![omg ubuntu](https://www.google.com/s2/favicons?domain=http://www.omgubuntu.co.uk/)Omg! Ubuntu!](http://www.omgubuntu.co.uk/)</div>

<div class="tile">[![compradiccion](https://www.google.com/s2/favicons?domain=https://www.compradiccion.com/)Compradicción](https://www.compradiccion.com/)</div>

<div class="tile">[![vitonica](https://www.google.com/s2/favicons?domain=vitonica.com)Vitónica](https://www.vitonica.com/)</div>

</div>

<div class="fila oculto2">

### Herramientas

<div class="tile">[![traductor](https://www.google.com/s2/favicons?domain=https://translate.google.es)Traductor](https://translate.google.es/?um=1&ie=UTF-8&hl=es&client=tw-ob#en/es/)</div>

<div class="tile">[![calendario](images/calendar.png)Calendario](https://calendar.google.com/calendar/r#main_7)</div>

<div class="tile">[![JSBin](https://www.google.com/s2/favicons?domain=jsbin.com)JS Bin](https://jsbin.com/?html,js,console)</div>

<div class="tile">[![Convertico](https://www.google.com/s2/favicons?domain=convertico.com)ConvertICO](http://convertico.com/)</div>

<div class="tile">[![resize image](https://www.google.com/s2/favicons?domain=https://aurea.es/el-logo-de-aurea-seleccionado-como-favicon-por-smashing-magazing/)Online Image Resizer](http://resizeimage.net/)</div>

<div class="tile">[![smallpdf](https://www.google.com/s2/favicons?domain=https://smallpdf.com/pdf-to-jpg)PDF to JPG](https://smallpdf.com/pdf-to-jpg)</div>

<div class="tile">[![wikipedia](https://www.google.com/s2/favicons?domain=wikipedia.org)Wikipedia](https://www.wikipedia.org/)</div>

<div class="tile">[![onedrive](images/onedrive.ico)OneDrive](https://onedrive.live.com/?id=root&cid=1D50B001E84B1606)</div>

<div class="tile">[![google drive](images/drive.png)Google Drive](https://drive.google.com/drive/my-drive)</div>

<div class="tile">[![youtube](https://www.google.com/s2/favicons?domain=youtube.com)Youtube](https://www.youtube.com/)</div>

<div class="tile">[![pocket](https://www.google.com/s2/favicons?domain=getpocket.com)Pocket](https://getpocket.com/a/queue/)</div>

<div class="tile">[![mis marcadores](https://www.google.com/s2/favicons?domain=mismarcadores.com)Mis Marcadores](http://www.mismarcadores.com/)</div>

<div class="tile">[![w3schools](https://www.google.com/s2/favicons?domain=w3schools.com)W3Schools](https://www.w3schools.com/)</div>

<div class="tile">[![css tricks](https://www.google.com/s2/favicons?domain=css-tricks.com)CSS Tricks](https://css-tricks.com/)</div>

<div class="tile">[![ASP .NET](https://www.google.com/s2/favicons?domain=asp.net)ASP.NET](https://www.asp.net/)</div>

<div class="tile">[![guía C#](https://www.google.com/s2/favicons?domain=asp.net)Guía C#](https://docs.microsoft.com/es-es/dotnet/csharp/programming-guide/index)</div>

<div class="tile">[![AWS](https://www.google.com/s2/favicons?domain=aws.amazon.com)AWS Manag](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-2.console.aws.amazon.com%2Fconsole%2Fhome%3Fregion%3Dus-east-2%26state%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fhomepage&forceMobileApp=0)</div>

<div class="tile">[![Keep](images/keep.png)Keep](https://keep.google.com/?hl=es)</div>

</div>

<div class="fila oculto2">

### Otros

<div class="tile">[![elhartista](https://www.google.com/s2/favicons?domain=instagram.com)Elhartista](https://www.instagram.com/elhartista/)</div>

<div class="tile">[![hootthings](https://www.google.com/s2/favicons?domain=instagram.com)Hootthings](https://www.instagram.com/HOOTTHINGS/)</div>

<div class="tile">[![Amazon](https://www.google.com/s2/favicons?domain=https://www.amazon.es/)Amazon](https://www.amazon.es/)</div>

<div class="tile">[![PCcomponentes](https://www.google.com/s2/favicons?domain=pccomponentes.com)PC Componentes](https://www.pccomponentes.com/)</div>

<div class="tile">[![PCBox](https://www.google.com/s2/favicons?domain=pcbox.com)PC Box](https://www.pcbox.com/)</div>

<div class="tile">[![Multcloud](https://www.google.com/s2/favicons?domain=https://www.multcloud.com)MultCloud](https://www.multcloud.com/index.jsp?rl=en-US#home)</div>

<div class="tile">[![Raindrop](images/raindrop.png)Raindrop.io](https://raindrop.io/app/#/collection/1985176)</div>

<div class="tile">[![facebook](https://www.google.com/s2/favicons?domain=https://www.facebook.com/)Facebook](https://www.facebook.com/)</div>

<div class="tile">[![Twitter](https://www.google.com/s2/favicons?domain=twitter.com)Twitter](https://twitter.com/)</div>

<div class="tile">[![Instagram](https://www.google.com/s2/favicons?domain=https://www.instagram.com/)Instagram](https://www.instagram.com/)</div>

<div class="tile">[![pinterest](https://www.google.com/s2/favicons?domain=https://www.pinterest.es/)Pinterest](https://www.pinterest.es/)</div>

<div class="tile">[![Iberdrola](https://www.google.com/s2/favicons?domain=https://www.iberdrola.es/informacion/facturas/pagar-facturas-online)Facturas Iberdrola](https://www.iberdrola.es/informacion/facturas/pagar-facturas-online)</div>

<div class="tile">[![microsoft imagine](https://www.google.com/s2/favicons?domain=https://e5.onthehub.com)Microsoft Imagine](https://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=8907e6cf-739b-e011-969d-0030487d8897&vsro=8)</div>

<div class="tile">[![box](https://www.google.com/s2/favicons?domain=https://www.box.com)Box](https://app.box.com/folder/0)</div>

<div class="tile">[![tixio](images/tixio.png)Tixio.io](https://sergiosr.tixio.io/app/board/5a468e012a90693cd5b93ffb)</div>

<div class="tile">[![bankia](https://www.google.com/s2/favicons?domain=https://www.bankia.es/es/particulares)Bankia](https://www.bankia.es/es/particulares)</div>

<div class="tile">[![eurocajarural](https://www.google.com/s2/favicons?domain=https://eurocajarural.es/)Eurocajarural](https://eurocajarural.es/)</div>

<div class="tile">[![caixabank](https://www.google.com/s2/favicons?domain=https://www.caixabank.es)Caixabank](https://www.caixabank.es/particular/home/particulares_es.html)</div>

</div>

</div>

</div>

<div id="dawc" class="filas tabcontent">

<div class="fila">

### Inicio

<div class="tile">[![google](https://www.google.com/s2/favicons?domain=https://google.es)Google](https://google.es)</div>

<div class="tile">[![gmail](images/gmail.png)Gmail](https://mail.google.com/mail/u/0/?tab=wm#inbox)</div>

<div class="tile">[![outlook](images/outlook.png)Outlook](https://outlook.live.com/mail/)</div>

<div class="tile">[![moodle](https://www.google.com/s2/favicons?domain=http://fp.edu.gva.es/av/)Aula FP](http://fp.edu.gva.es/av/)</div>

<div class="tile">[![Alerta Digital](https://www.google.com/s2/favicons?domain=www.alertadigital.com)Alerta Digital](http://www.alertadigital.com/)</div>

<div class="tile">[![20 Minutos](images/20Minutos.svg)20 Minutos](http://www.20minutos.es/)</div>

<div class="tile">[![Infojobs](images/infojobs.png)Infojobs](https://www.infojobs.net/candidate/my-infojobs.xhtml?dgv=1660446257568886965&nocache=true)</div>

<div class="tile">[![Hispashare](images/hispashare.png)Hispashare](http://www.hispashare.com/)</div>

<div class="tile">[![tumejortorrent](images/tumejortorrent.jpg)Tumejortorrent](http://tumejortorrent.com/)</div>

<div class="tile">[![mejortorrent peliculas hd](https://www.google.com/s2/favicons?domain=www.mejortorrent.com)Mejortorrent Películas HD](http://www.mejortorrent.com/torrents-de-peliculas-hd-alta-definicion.html)</div>

<div class="tile">[![mejortorrent series hd](https://www.google.com/s2/favicons?domain=www.mejortorrent.com)Mejortorrent Series HD](http://www.mejortorrent.com/torrents-de-series-hd-alta-definicion.html)</div>

<div class="tile">[![Kickass torrents](images/Kickasstorrents.png)Kickass Torrents](https://katcr.co/new/)</div>

<div class="tile">[![Papaly](images/papaly.png)Papaly](https://papaly.com/)</div>

<div class="tile">[![Chrome Store](images/chromestore.png)Chrome Web Store](https://chrome.google.com/webstore/category/extensions)</div>

<div class="tile">[![Play Store](https://www.google.com/s2/favicons?domain=https://play.google.com/store)Play Store](https://play.google.com/store)</div>

</div>

<div class="fila">

### Herramientas

<div class="tile">[![traductor](https://www.google.com/s2/favicons?domain=www.google.es)Traductor](https://www.google.es/search?q=traductor&oq=trad&aqs=chrome.0.69i59j69i65j69i59j69i65l2j69i60.2881j0j7&sourceid=chrome&ie=UTF-8)</div>

<div class="tile">[![calendario](images/calendar.png)Calendario](https://calendar.google.com/calendar/r#main_7)</div>

<div class="tile">[![JSBin](https://www.google.com/s2/favicons?domain=jsbin.com)JS Bin](https://jsbin.com/?html,js,console)</div>

<div class="tile">[![Convertico](https://www.google.com/s2/favicons?domain=convertico.com)ConvertICO](http://convertico.com/)</div>

<div class="tile">[![wikipedia](https://www.google.com/s2/favicons?domain=wikipedia.org)Wikipedia](https://www.wikipedia.org/)</div>

<div class="tile">[![google drive](images/drive.png)Google Drive](https://drive.google.com/drive/my-drive)</div>

<div class="tile">[![youtube](https://www.google.com/s2/favicons?domain=youtube.com)Youtube](https://www.youtube.com/)</div>

<div class="tile">[![pocket](https://www.google.com/s2/favicons?domain=getpocket.com)Pocket](https://getpocket.com/a/queue/)</div>

<div class="tile">[![mis marcadores](https://www.google.com/s2/favicons?domain=mismarcadores.com)Mis Marcadores](http://www.mismarcadores.com/)</div>

<div class="tile">[![w3schools](https://www.google.com/s2/favicons?domain=w3schools.com)W3Schools](https://www.w3schools.com/)</div>

<div class="tile">[![css tricks](https://www.google.com/s2/favicons?domain=css-tricks.com)CSS Tricks](https://css-tricks.com/)</div>

<div class="tile">[![ASP .NET](https://www.google.com/s2/favicons?domain=asp.net)ASP.NET](https://www.asp.net/)</div>

<div class="tile">[![guía C#](https://www.google.com/s2/favicons?domain=asp.net)Guía C#](https://docs.microsoft.com/es-es/dotnet/csharp/programming-guide/index)</div>

<div class="tile">[![AWS](https://www.google.com/s2/favicons?domain=aws.amazon.com)AWS Manag](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-2.console.aws.amazon.com%2Fconsole%2Fhome%3Fregion%3Dus-east-2%26state%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fhomepage&forceMobileApp=0)</div>

<div class="tile">[![Keep](images/keep.png)Keep](https://keep.google.com/?hl=es)</div>

</div>

<div class="fila">

### DAWC

<div class="tile">[![elhartista](https://www.google.com/s2/favicons?domain=instagram.com)Elhartista](https://www.instagram.com/elhartista/)</div>

<div class="tile">[![hootthings](https://www.google.com/s2/favicons?domain=instagram.com)Hootthings](https://www.instagram.com/HOOTTHINGS/)</div>

<div class="tile">[![PCcomponentes](https://www.google.com/s2/favicons?domain=pccomponentes.com)PC Componentes](https://www.pccomponentes.com/)</div>

<div class="tile">[![PCBox](https://www.google.com/s2/favicons?domain=pcbox.com)PC Box](https://www.pcbox.com/)</div>

<div class="tile">[![wikipedia](https://www.google.com/s2/favicons?domain=wikipedia.org)Wikipedia](https://www.wikipedia.org/)</div>

<div class="tile">[![google drive](images/drive.png)Google Drive](https://drive.google.com/drive/my-drive)</div>

<div class="tile">[![youtube](https://www.google.com/s2/favicons?domain=youtube.com)Youtube](https://www.youtube.com/)</div>

<div class="tile">[![pocket](https://www.google.com/s2/favicons?domain=getpocket.com)Pocket](https://getpocket.com/a/queue/)</div>

<div class="tile">[![mis marcadores](https://www.google.com/s2/favicons?domain=mismarcadores.com)Mis Marcadores](http://www.mismarcadores.com/)</div>

<div class="tile">[![w3schools](https://www.google.com/s2/favicons?domain=w3schools.com)W3Schools](https://www.w3schools.com/)</div>

<div class="tile">[![css tricks](https://www.google.com/s2/favicons?domain=css-tricks.com)CSS Tricks](https://css-tricks.com/)</div>

<div class="tile">[![ASP .NET](https://www.google.com/s2/favicons?domain=asp.net)ASP.NET](https://www.asp.net/)</div>

<div class="tile">[![guía C#](https://www.google.com/s2/favicons?domain=asp.net)Guía C#](https://docs.microsoft.com/es-es/dotnet/csharp/programming-guide/index)</div>

<div class="tile"><a href="" target="_blank"></a></div>

</div>

</div>

</div>

<script>function openCity(evt, cityName) { var i, tabcontent, tablinks; tabcontent = document.getElementsByClassName("tabcontent"); for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; } tablinks = document.getElementsByClassName("tablinks"); for (i = 0; i < tablinks.length; i++) { tablinks[i].className = tablinks[i].className.replace(" active", ""); } document.getElementById(cityName).style.display = "block"; evt.currentTarget.className += " active"; } // Get the element with id="defaultOpen" and click on it document.getElementById("defaultOpen").click();</script>
