steal('clui/idletimer/manager.js', function () {
    describe("idleTimerManager", function () {
        beforeEach(function () {
            setFixtures("<div id='idleTimeoutDialog'> dialog </div>");
        });
        it("renders the idle timeout dialog", function () {
            spyOn($.fn, "html").andCallFake(function (view) {
                expect($(this).attr('id')).toEqual('idleTimeoutDialog');
                return $(this);
            });
            Clui.idleTimer.init();
        });
        it("delegates the correct events", function () {
            spyOn($.fn, "delegate").andCallThrough();
            Clui.idleTimer.init();
            expect($.fn.delegate).toHaveBeenCalledWith('.keepAlive', 'click', jasmine.any(Function));
            expect($.fn.delegate).toHaveBeenCalledWith('.logout', 'click', jasmine.any(Function));
        });
        it("handles click events", function () {
            Clui.idleTimer.init();
            expect($("#idleTimeoutDialog")).toHandle("click");
        });
        describe("managing the timer", function () {
            it("triggers timerreset function on document body when pubbed", function () {
                spyOn($.fn, "trigger");
                Clui.idleTimer.init();
                Clui.hub.pub("system.notIdle", {
                    timerinitiated: false
                });
                expect($.fn.trigger).toHaveBeenCalledWith("timerreset");
            });
            it("does not trigger timerreset if the timer is not initiated", function () {
                spyOn($.fn, "trigger");
                Clui.idleTimer.init();
                Clui.hub.pub("system.notIdle", {
                    timerinitiated: true
                });
                expect($.fn.trigger).not.toHaveBeenCalled();
            });
            it("publishes system.idle on idle.idleTimer", function () {
                spyOn(Clui.hub, 'pub');
                Clui.idleTimer.init();
                $(document.body).trigger('idle.idleTimer');
                expect(Clui.hub.pub).toHaveBeenCalledWith("system.idle");
            });
            it("publishes system.notIdle on active.idleTimer", function () {
                spyOn(Clui.hub, 'pub');
                Clui.idleTimer.init();
                $(document.body).trigger('active.idleTimer');
                expect(Clui.hub.pub).toHaveBeenCalledWith("system.notIdle", {
                    timerinitiated: true
                });
            });
        });
    });
});