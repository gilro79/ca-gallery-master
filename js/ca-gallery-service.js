"use strict";

var gProjects = [
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "Curful where you click",
        desc: "You need to flag all mines and open all the other cells. the clock is ticking",
        url: "https://gilro79.github.io/MineSweeper/",
        publishedAt: 1633549741000,
        labels: ["Vintage gamse", "keyboard events"],
        img: 'img/portfolio/minesweeper-thumbnail.jpg'
    },
    {
        id: "pacman",
        name: "Pacman",
        title: "Dodge that ghosts",
        desc: "eat your food and don't get eaten",
        url: "https://gilro79.github.io/pacman/",
        publishedAt: 1634574558000,
        labels: ["Vintage gamse", "keyboard events"],
        img: 'img/portfolio/pacman-thumbnail.jpg',
    },
    {
        id: "bookshop",
        name: "Book shop",
        title: "Let's read!",
        desc: "manage your book stor website",
        url: "https://gilro79.github.io/book-shop-proj/",
        publishedAt: 1634574558000,
        labels: ["shop", "books"],
        img: 'img/portfolio/book-shop-thumbnail.jpg',
    },
];

function getProjects() {
    return gProjects;
}