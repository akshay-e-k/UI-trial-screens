$(document).ready(function() {
    
    var list = [ 
        {"id":1, "description": "Create a Job", "isTodo": true },
        {"id":2, "description": "Add Team Member", "isTodo": true },
        {"id":3, "description": "Take Interview", "isTodo": true },
        {"id":4, "description": "Edit Quizes", "isTodo": true },
        // { "description": "Make Blog Post", "isTodo": true },
        // { "description": "Create a Job", "isTodo": true },
        // { "description": "Create a Job", "isTodo": true },
        // { "description": "Create a Job", "isTodo": true },
        // { "description": "Add Team Member", "isTodo": true },
        // { "description": "Take Interview", "isTodo": true },
        // { "description": "Edit Quizes", "isTodo": true },
        // { "description": "Make Blog Post", "isTodo": true },
        // { "description": "Create a Job", "isTodo": true },
        // { "description": "Create a Job", "isTodo": true },
        // { "description": "Create a Job", "isTodo": true },
        // { "description": "Create a Job", "isTodo": true },
        // { "description": "Add Team Member", "isTodo": true },
        // { "description": "Take Interview", "isTodo": true },
        // { "description": "Edit Quizes", "isTodo": true },
        // { "description": "Make Blog Post", "isTodo": true }
    ];
    var selector = "#todoListTable";

    $(selector).kendoGrid({
        dataSource: {
            data: list,
            schema: {
                model: {
                    fields: {
                        description: { type: "string" },
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
            { field: "", title: "", width: "130px", template: function(dataItem) {
                return  '<label class="pj-chkbox-block">' +
                        '<input type="checkbox" checked />' +
                        '<span class="checkmark"></span>' +
                        '</label><span class="pj-chkbox-label">' + dataItem.description + '</span>'
            }}
        ]
    });

    $(".addTodoBtn").click(function() {
        $(".addtodo-input").css({display: "block"});
    });
    $(".addtodo-input").blur(function() {
        if($(this).val().trim().length != 0) {
            var newRow = {"description": $(this).val(), isTodo: true};
            var grid = $(selector).data("kendoGrid");
            grid.dataSource.add(newRow);
            $(this).val("");
            $(this).css({display: "none"});
        }
        else {
            return;
        }
    });
});