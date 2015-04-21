/**
 * Created by Nathan on 4/21/2015.
 */
    var rocks = "test";
var calendarText = "<div data-role=\"page\" class=\"calendar\" id=\"calendar\"> \
<div data-role=\"header\"data-position=\"fixed\" data-theme=\"b\"  data-id=\"persBar\"> \
<a href=\"#myPatients\" class=\"ui-btn ui-corner-all ui-shadow ui-icon-arrow-l ui-btn-icon-notext\"data-transition=\"slide\"data-direction=\"reverse\" >Back</a> \
<h1>Calendar</h1> \
</div> \
<div data-role=\"panel\" id=\"activitiesPage\"> \
<h2>Activities</h2> \
<p>Phone number: 773-528-7483</p> \
<p>Address: 121 N. LaSalle Street \
<br>Chicago, Illinois 60602 USA</p> \
<p>Email: thebestadelepitt@gmail.com</p> \
<a href=\"#calendar\" data-rel=\"close\" class=\"ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-b ui-icon-delete ui-btn-icon-left\">Close</a> \
</div> \
<div data-role=\"panel\" id=\"Dischargments\"> \
<h2>Dischargments</h2> \
<p>Phone number: 773-528-7483</p> \
<p>Address: 121 N. LaSalle Street \
<br>Chicago, Illinois 60602 USA</p> \
<p>Email: thebestadelepitt@gmail.com</p> \
<a href=\"#calendar\" data-rel=\"close\" class=\"ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-b ui-icon-delete ui-btn-icon-left\">Close</a> \
</div> \
<div data-role=\"panel\" id=\"dischargments\"> \
<h2>Dischargments</h2> \
<p>Phone number: 773-528-7483</p> \
<p>Address: 121 N. LaSalle Street \
<br>Chicago, Illinois 60602 USA</p> \
<p>Email: thebestadelepitt@gmail.com</p> \
<a href=\"#calendar\" data-rel=\"close\" class=\"ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-b ui-icon-delete ui-btn-icon-left\">Close</a> \
</div> \
<div data-role=\"panel\" id=\"laboratory\"> \
<h2>Laboratory</h2> \
<p>Phone number: 773-528-7483</p> \
<p>Address: 121 N. LaSalle Street \
<br>Chicago, Illinois 60602 USA</p> \
<p>Email: thebestadelepitt@gmail.com</p> \
<a href=\"#calendar\" data-rel=\"close\" class=\"ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-b ui-icon-delete ui-btn-icon-left\">Close</a> \
</div> \
<div data-role=\"panel\" id=\"nutrition\"> \
<h2>Nutrition</h2> \
<p>Phone number: 773-528-7483</p> \
<p>Address: 121 N. LaSalle Street \
<br>Chicago, Illinois 60602 USA</p> \
<p>Email: thebestadelepitt@gmail.com</p> \
<a href=\"#calendar\" data-rel=\"close\" class=\"ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-b ui-icon-delete ui-btn-icon-left\">Close</a> \
</div> \
<div data-role=\"panel\" id=\"notification\"> \
<h2>Notification</h2> \
<p>Phone number: 773-528-7483</p> \
<p>Address: 121 N. LaSalle Street \
<br>Chicago, Illinois 60602 USA</p> \
<p>Email: thebestadelepitt@gmail.com</p> \
<a href=\"#calendar\" data-rel=\"close\" class=\"ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-b ui-icon-delete ui-btn-icon-left\">Close</a> \
</div> \
<div data-role=\"panel\" id=\"caring-activities\"> \
<h2>Caring activities</h2> \
<p>Phone number: 773-528-7483</p> \
<p>Address: 121 N. LaSalle Street \
<br>Chicago, Illinois 60602 USA</p> \
<p>Email: thebestadelepitt@gmail.com</p> \
<a href=\"#calendar\" data-rel=\"close\" class=\"ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-b ui-icon-delete ui-btn-icon-left\">Close</a> \
</div> \
<div data-role=\"panel\" id=\"examination\"> \
<h2>Physical examinations</h2> \
<p>Phone number: 773-528-7483</p> \
<p>Address: 121 N. LaSalle Street \
<br>Chicago, Illinois 60602 USA</p> \
<p>Email: thebestadelepitt@gmail.com</p> \
<a href=\"#calendar\" data-rel=\"close\" class=\"ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-b ui-icon-delete ui-btn-icon-left\">Close</a> \
</div> \
<div data-role=\"main\" class=\"ui-content calendar-content\" id=\"calendar-content\"> \
<ul  data-role=\"listview\" data-icon=\"arrow-l\" iconpos=\"left\" id=\"calendarUl\"> \
<li><a href=\"#activitiesPage\" class=\"\" id=\"\"> Activities</a></li> \
<li><a href=\"#dischargments\" class=\"\" id=\"\">Dischargments</a> \
<!-- <ul data-role=\"listview\"> \
<li><a href=\"#activities\" class=\"\" id=\"\"> Defecation</a></li> \
<li><a href=\"#dischargements\" class=\"\" id=\"\">Nausea</a></li> \
<li><a href=\"#laboratory\" class=\"\" id=\"\">Urine(ml)</a></li> \
<li><a href=\"#nutrition\" class=\"\" id=\"\">Catheter/Cystofix</a></li> \
</ul> --> \
</li> \
<li><a href=\"#laboratory\" class=\"\" id=\"\">Laboratory</a></li> \
<li><a href=\"#nutrition\" class=\"\" id=\"\">Nutrition</a> \
<!-- <ul class=\"\" id=\"\"> \
<li><a href=\"#activities\" class=\"\" id=\"\">Nosagastric tube/PEG</a></li> \
<li><a href=\"#dischargements\" class=\"\" id=\"\">Dining</a></li> \
</ul> --> \
</li> \
<li><a href=\"#notification\" class=\"\" id=\"\">Notification</a></li> \
<li><a href=\"#caring-activities\" class=\"\" id=\"\">Caring activities</a></li> \
<li><a href=\"#examination\" class=\"\" id=\"\">Physical examinations</a></li> \
</ul> \
</div> \
<div data-role=\"footer\" data-position=\"fixed\" data-theme=\"b\" class=\"calendarFooter\" id=\"calendarFooter\" style=\"position:fixed;\" data-id=\"persBar\"> \
<div data-role=\"navbar\"id=\"footerNav\" class=\"footerNav\"> \
<ul> \
<li><a href=\"#patient\"><i class=\"fa fa-user-md fa-1x\"></i></a></li> \
<li><a href=\"#health\"><i class=\"fa fa-h-square fa-1x\"></i></a></li> \
<li><a href=\"#reporting\"><i class=\"fa fa-file-text-o fa-1x\"></i></a></li> \
<li><a href=\"#services\" ><i class=\"fa fa-gears fa-1x\"></i></a></li> \
<li><a href=\"#sos\" id=\"sos\"><i class=\"fa fa-bell-o fa-1x\"></i></a></li> \
</ul> \
</div> \
</div> \
</div>";