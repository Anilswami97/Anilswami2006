var ml = [
    { title: "Real time Object Detection", 
      img_path: "assets/images/shopping.png",
      description: "It's a room rental platform specifically designed for students to find rented rooms near their desired location. The website aims to solve the problem of students having to physically visit different places and ask around for available rooms by providing a centralized online platform." },
];

// Data for Button 2
var django = [
    { title: "Commerical Website", 
      img_path: "assets/images/shopping.png",
      description: "It's a room rental platform specifically designed for students to find rented rooms near their desired location. The website aims to solve the problem of students having to physically visit different places and ask around for available rooms by providing a centralized online platform." },
    { title: "Rental Website", 
      img_path: "assets/images/rental.png",
      description: "It's a room rental platform specifically designed for students to find rented rooms near their desired location. The website aims to solve the problem of students having to physically visit different places and ask around for available rooms by providing a centralized online platform." },
];

var others = [
    {
        title : "JPG to PNG Converter",
        img_path: "assets/images/converter.png",
        description: "It's a room rental platform specifically designed for students to find rented rooms near their desired location. The website aims to solve the problem of students having to physically visit different places and ask around for available rooms by providing a centralized online platform.",
    }
]

function showProjects(page, button, projects) {
    var projectsData;

    if (button === 1) {
        projectsData = ml;
    } else if (button === 2) {
        projectsData = django;
    } else if (button === 3) {
        projectsData = others;
    }

    
    var projectsPerPage = projects; // Adjust as needed
    var startIndex = (page - 1) * projectsPerPage;
    var endIndex = startIndex + projectsPerPage;
    var projectsToShow = projectsData.slice(startIndex, endIndex);

    var projectsHTML = projectsToShow.map(project =>
        `<div class="p-4 my-4 rounded-4 project-div">
            <h2 class="mb-3">${project.title}</h2>
            <div class="project-img mb-4">
                <img src="${project.img_path}" alt="" class="img-fluid rounded shadow">
            </div>
            <p>
                ${project.description}
            </p>
        </div>`
    ).join('');

    document.getElementById('projects-container').innerHTML = projectsHTML;
}


window.addEventListener('DOMContentLoaded', function() {
    showProjects(1, 1, 2);
});
