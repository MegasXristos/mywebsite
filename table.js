// Define column definitions
const columnDefs = [
    { headerName: "Project Name", field: "projectName", filter: true },
    //{ headerName: "Description", field: "description", width:300 },
    { headerName: "Skills Used", field: "skills", filter: true },
   // { headerName: "Date", field: "date" }
];

// Define row data
const rowData = [
    { projectName: "Visualisation of manufacturer data", description: "A personal portfolio website to showcase my skills.", skills: "VBA, Excel, Power Query", date: "2024-03-15" },
    { projectName: "SAP order process automation", description: "A full-featured e-commerce platform with payment integration.", skills: "VBA, Excel, SAP", date: "2023-11-20" },
    { projectName: "Onboarding App", description: "A task management app with real-time collaboration.", skills: "React, JavaScript, .NET, Web API", date: "2023-08-30" },
    { projectName: "Car Configurator App", description: "A task management app with real-time collaboration.", skills: "ASP.NET Core, Razor Pages, SQL", date: "2023-08-30" },
    { projectName: "Automatic assignment of e-mails", description: "A task management app with real-time collaboration.", skills: "C#", date: "2023-08-30" },
    { projectName: "Automatic structure of the order form", description: "A task management app with real-time collaboration.", skills: "VBA, Excel", date: "2023-08-30" },
    { projectName: "Web Scraper manufacturer tool", description: "A task management app with real-time collaboration.", skills: "Python, Excel, Power Query", date: "2023-08-30" },
    { projectName: "Data processing", description: "A task management app with real-time collaboration.", skills: "Python", date: "2023-08-30" }
];

// Grid options
const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
};

// Initialize the grid
document.addEventListener('DOMContentLoaded', function() {
    const eGridDiv = document.querySelector('#myGrid');
    if (eGridDiv) {
        new agGrid.Grid(eGridDiv, gridOptions);
        console.log('AG Grid has been initialized');
    } else {
        console.error('Failed to find the #myGrid element');
    }
});
