'use strict';
$(document).ready(onInit);


function renderPortfolio() {
    // console.log('inside render');
    var projects = getProjects();
    // console.log('projects',projects);
    var strHtmls = projects.map(function (project) {
        var  projstr = JSON.stringify(project);
        return ` 
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="onOpenModal('${project.name}','${project.url}','${project.desc}','${project.img}')" href="#portfolioModal1">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="${project.img}" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${project.name}</h4>
        <p class="text-muted">${project.labels}</p>
        </div>
        </div> 
        `
    })
    $('.portfolio-container').html(strHtmls);
}

function onOpenModal(projName, projUrl, projDesc, projImg) {
    // const projName = $('.portfolio-caption h4').text();
    var proj = getProjByName(projName)
    $('.project-name').text(proj.name);
    $('.project-url').attr("href",proj.url);
    $('.project-desc').text(proj.desc);
    const relDate = getDateFromTimestamp(proj.publishedAt)
    $('.project-rel-date').text(relDate);
    $('.project-img').attr("src", proj.img);
}

function onOpenModal2() {
    // console.log('this', $(this).find('h4'));
    // var txt = $(this).find('h4')[0].innerText;
    // console.log(txt);
}