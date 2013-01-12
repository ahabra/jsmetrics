steal('./reader.js', 'clui/contextmenu/noncontextmenu.js', //
'nbreader/ui/apps/nbreader/chapter_nav', //

function () {
    Nbreader.App.Base("Nbreader.App.Fullbook", {

    }, {
        init: function () {
            Nbreader.App.readingMode = 'fullbook'; // FIXME used by bookmarks.js
            this._super();
        },

        _initRouteChangeListeners: function () {
            this._super();

            var self = this;

            // Full Book Mode
            $.route.delegate('chapterId', 'change', function () {
                self.run('loadReading');
            });

            // TODO where to put this, and is there a $.route-y way to do it?
            if (window.location.hash === '') {
                $.route.attrs({
                    bookId: Clui.appContext.coreTextISBN,
                    chapterId: 'front-matter'
                });
            }
        },

        renderPage: function (reading) {
            this._super(reading);
            $('#ebook_chapter_navigation').nbreader_ui_apps_nbreader_chapter_nav({
                coreTextIsbn: reading.bookId,
                contentKey: Clui.appData('contentKey'),
                chapterId: reading.chapterId,
                booktitle: Clui.appContext.nextBook.title,
                author: Clui.appContext.nextBook.author,
                displayEdition: Clui.appContext.nextBook.displayEdition
            });

            // when opening any chapter, always hide the chapter menu
            //TODO: move this to before the reading load
            $("#ebook_chapter_navigation").hide();
        },

        loadReading: function (callback) {
            var self = this;
            var deferred = $.Deferred();
            Nbreader.Ui.Apps.Nbreader.Models.Reading.findOneRefToc({
                bookId: $.route.attr('bookId'),
                chapterId: $.route.attr('chapterId'),
                contentKey: Clui.appData('contentKey'),
                snapshotId: Clui.appContext.nextBookId
            }, function (model) {
                model.attr('mode', 'fullbook');
                if (callback) {
                    callback(model);
                }
                self.model = model;
                deferred.resolve();
            }, function () {
                deferred.reject();
            });
            return deferred;
        },

        setupReader: function () {
            this._super();
            $(document).clui_noncontextmenu();
            if ($('#readerAppStyles').length === 0) {
                $("body").addClass("fullbook");
                var href = window.location.protocol + "//" + window.location.host + '/static/nbreader/ui/css/readerApp.css';
                var link = '<link id="readerAppStyles" rel="stylesheet" type="text/css" href="' + href + '" media="all" />';
                $(link).appendTo('head');
            }
        }


    });

});