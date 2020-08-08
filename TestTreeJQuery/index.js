// !!!!! Just followed this !!!!!

var data = [
    {
        name: 'node1',
        children: [
            { name: 'child1' },
            { name: 'child2' }
        ]
    },
    {
        name: 'node2',
        children: [
            { name: 'child3' }
        ]
    }
];


//$(function() {
//    $('#tree1').tree({
//        data: data
//    });
//});
//

$.getJSON(
    'api/Greetings/GetTree',
    function (data) {
        console.log(data);

        $('#tree1').tree({
            data: data.clients
        });
    }
);


//$(function () {
//    $("#employees").dxTreeList({
//        dataSource: employees,
//        rootValue: -1,
//        keyExpr: "ID",
//        parentIdExpr: "Head_ID",
//        columns: [{
//            dataField: "Title",
//            caption: "Position"
//        }, "Full_Name", "City", "State", "Mobile_Phone", {
//            dataField: "Hire_Date",
//            dataType: "date"
//        }],
//        expandedRowKeys: [1],
//        showRowLines: true,
//        showBorders: true,
//        columnAutoWidth: true
//    });
//});

//
//$(function () {
//    $("#employees").dxTreeList({
//        dataSource: dummyData(),
//        itemsExpr: "Accounts",
//        keyExpr: "AccountId",
//        parentIdExpr: "ClientId",
//        dataStructure: "tree",
//        columns: [
//            {
//                dataField: "Name",
//                caption: "Client"
//            },
//            "AccountId", "Name"
//        ],
//        expandedRowKeys: [1],
//        showRowLines: true,
//        showBorders: true,
//        columnAutoWidth: true
//    });
//
//
//    function getDataSource() {
//        return {
//            load: function (options) {
//                return $.ajax({
//                    url: "api/Greetings/Clients",
//                    dataType: "json",
//                    data: { parentIds: options.parentIds }
//                });
//            }
//        };
//    }
//
//    function dummyData() {
//        return {
//            "result":
//                [
//                    {
//                        "Name": "Client1",
//                        "Accounts": [
//                            {
//                                "Name": "A1"
//                            },
//                            {
//                                "Name": "A2"
//                            }
//                        ]
//                    },
//                    {
//                        "Name": "Client2",
//                        "Accounts": [
//                            {
//                                "Name": "A4"
//                            },
//                            {
//                                "Name": "A5"
//                            }
//                        ]
//                    }
//                ]
//        };
//};