$(document).ready(function() {
    
    var list = [ 
        { "Job": "Marketing Executive", "Department": "Marketing", "Candidates": 12, "Status": 2},
        { "Job": "Accounts Manager", "Department": "Accounting", "Candidates": 12, "Status": 3},
        { "Job": "Computer System Analyst", "Department": "Information Technology", "Candidates": 0, "Status": 10},
        { "Job": "Network Administrator", "Department": "Information Technology", "Candidates": 2, "Status": 5},
        { "Job": "Project Manager", "Department": "Administration", "Candidates": 0, "Status": 6},
        { "Job": "React Developer", "Department": "Information Technology", "Candidates": 10, "Status": 8},
        { "Job": "VueJS Developer", "Department": "Information Technology", "Candidates": 5, "Status": 4},
        { "Job": "NodeJS Developer", "Department": "Information Technology", "Candidates": 0, "Status": 1},
        { "Job": "JavaScript Developer", "Department": "Information Technology", "Candidates": 6, "Status": 8},
        { "Job": "Recruiter", "Department": "Human Resource", "Candidates": 3, "Status": 7},
        { "Job": "Civil Engineer", "Department": "Construction", "Candidates": 2, "Status": 3},
        { "Job": "Design Engineer", "Department": "UI/UX", "Candidates": 2, "Status": 2},
        { "Job": "Sales Executive", "Department": "Sales", "Candidates": 2, "Status": 6},
        { "Job": "Nurse", "Department": "Medical", "Candidates": 2, "Status": 5},
        { "Job": "Doctor", "Department": "Medical", "Candidates": 4, "Status": 6}
    ];
    var selector = "#jobstatusesTable";

    $(selector).kendoGrid({
        dataSource: {
            data: list,
            schema: {
                model: {
                    fields: {
                        Job: { type: "string" },
                        Department: { type: "string" },
                        Candidates: { type: "number" },
                        Status: { type: "number" }
                    }
                }
            },
            pageSize: 5
        },
        height: 200,
        scrollable: true,
        sortable: false,
        filterable: false,
        pageable: {
            input: true,
            numeric: false,
            alwaysVisible: true,
            messages: {
                display: "{0}-{1} of {2}"
            }
        },
        columns: [
            { field: "Job", title: "Job", width: "100px", template: function(dataItem) {
                return "<a href='#' style='color:rgba(60, 172, 223, 1)'>" + kendo.htmlEncode(dataItem.Job) 
                + "<i class='fa fa-share-square-o ml-1' aria-hidden='true'></i></a>";
            }},
            { field: "Department", title: "Department", width: "100px" },
            { field: "Candidates", title: "Candidates", width: "100px" },
            { field: "Status", width: "100px", template: function(dataItem) {
                return "<span class='badge badge-primary mr-1 px-2'>" + kendo.htmlEncode(dataItem.Status) + "</span>" +
                "<span class='badge badge-warning mr-1 px-2'>" + kendo.htmlEncode(dataItem.Status) + "</span>" +
                "<span class='badge badge-success mr-1 px-2'>" + kendo.htmlEncode(dataItem.Status) + "</span>" +
                "<span class='badge badge-danger mr-1 px-2'>" + kendo.htmlEncode(dataItem.Status) + "</span>";
            }}
        ]
    });
});