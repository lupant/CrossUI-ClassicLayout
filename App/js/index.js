xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "size" : 100,
                        "min" : 50,
                        "max" : 400,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : false
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 450
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "size" : 50,
                        "min" : 20,
                        "max" : 400,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "size" : 150,
                        "min" : 10,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : true
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 530
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "size" : 120,
                        "min" : 10,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : false
                    }
                ])
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setDirtyMark(false)
                .setDock("center")
                .setLeft("13.714285714285714em")
                .setTop("22.857142857142858em")
                .setWidth("10.59047619047619em")
                .setHeight("5.104761904761904em")
                .setCaption("Ciao!")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "{page.input}",
                            "Ciao",
                            200,
                            5000
                        ],
                        "method" : "message",
                        "event" : 1
                    },
                    "_xui_ui_button5_onclick"
                ]),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input")
                .setName("input")
                .setLeft("6.095238095238095em")
                .setTop("7.619047619047619em")
                .setWidth("18em")
                .setHeight("5.40952380952381em")
                .setLabelSize("8em")
                .setLabelCaption("Nuovo elemento\n")
                .setMultiLines(true),
                "main"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button5_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            this.input.setDisplay("ciao");
        }
    }
});