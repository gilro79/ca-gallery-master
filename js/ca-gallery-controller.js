'use strict';
$(document).ready(onInit);


function renderPortfolio() {
    console.log('inside render');
    var projects = getProjects();
    console.log('projects',projects);
    var strHtmls = projects.map(function (project) {
        return ` 
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="${project.img}" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${project.name}</h4>
        <p class="text-muted">${project.labels[1]}</p>
        </div>
        </div> 
        `
    })
    $('.portfolio-container').html(strHtmls);
}

