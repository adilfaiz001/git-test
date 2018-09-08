


var all_projects_template;

function showTemplate(template, data)
{
	var html    =  template(data);
	$('#content').html(html);
}


$(document).ready(function()
{
  var source = $("#all-projects-template").html();
  all_projects_template = Handlebars.compile(source);

  $('#all-projects-tab').click(function(event) {
    /* Act on the event */
    showTemplate(all_projects_template,projects);
  });
});
