define(['backbone.paginator'], function (BasePageableCollection) {


    'use strict';


    var PageableCollection = BasePageableCollection.extend({

        queryParams: {
            currentPage: 'page',
            pageSize: 'limit',
            totalPages: null,
            totalRecords: null,
            sortKey: null,
            order: null
        },

        state: {
            pageSize: null
        },

        parseLinks: function (data) {
            return {next: data.next, prev: data.previous};
        },

        parseRecords: function (data) {
            return data.results;
        },

        parseState: function (data) {
            return {totalRecords: data.count};
        }

    });


    return {
        'PageableCollection': PageableCollection
    };


});
