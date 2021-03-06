ideas.combo.Search = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        xtype: 'twintrigger',
        ctCls: 'x-field-search',
        allowBlank: true,
        msgTarget: 'under',
        emptyText: _('search'),
        name: 'query',
        triggerAction: 'all',
        clearBtnCls: 'x-field-search-clear',
        searchBtnCls: 'x-field-search-go',
        onTrigger1Click: this._triggerSearch,
        onTrigger2Click: this._triggerClear,
    });
    ideas.combo.Search.superclass.constructor.call(this, config);
    this.on('render', function () {
        this.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
            this._triggerSearch();
        }, this);
    });
    this.addEvents('clear', 'search');
};
Ext.extend(ideas.combo.Search, Ext.form.TwinTriggerField, {

    initComponent: function () {
        Ext.form.TwinTriggerField.superclass.initComponent.call(this);
        this.triggerConfig = {
            tag: 'span',
            cls: 'x-field-search-btns',
            cn: [
                {tag: 'div', cls: 'x-form-trigger ' + this.searchBtnCls},
                {tag: 'div', cls: 'x-form-trigger ' + this.clearBtnCls}
            ]
        };
    },

    _triggerSearch: function () {
        this.fireEvent('search', this);
    },

    _triggerClear: function () {
        this.fireEvent('clear', this);
    },

});
Ext.reg('ideas-combo-search', ideas.combo.Search);
Ext.reg('ideas-field-search', ideas.combo.Search);

ideas.combo.User = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        name: 'user_id'
        ,hiddenName: 'user_id'
        ,displayField: 'email'
        ,valueField: 'id'
        ,fields: ['email', 'username','id']
        ,pageSize: 20
        ,url: MODx.config.connector_url
        ,baseParams: {
            action: 'security/user/getlist'
        }
        ,typeAhead: true
        ,editable: true
    });
    MODx.combo.User.superclass.constructor.call(this,config);
};
Ext.extend(ideas.combo.User,MODx.combo.ComboBox);
Ext.reg('ideas-combo-user',ideas.combo.User);


ideas.combo.Type = function (config) {
    config = config || {};

    Ext.applyIf(config,{
        name: 'type'
        ,hiddenName: 'type'
        ,displayField: 'name'
        ,valueField: 'id'
        ,fields: ['name','id']
        ,pageSize: 10
        ,url: ideas.config.connector_url
        ,baseParams: {
            action: 'mgr/type/getlist',
            combo: true,
        }
    });
    ideas.combo.Type.superclass.constructor.call(this,config);
};
Ext.extend(ideas.combo.Type,MODx.combo.ComboBox);
Ext.reg('ideas-combo-type',ideas.combo.Type);


ideas.combo.Status = function (config) {
    config = config || {};

    Ext.applyIf(config,{
        name: 'status'
        ,hiddenName: 'status'
        ,displayField: 'name'
        ,valueField: 'id'
        ,fields: ['name','id']
        ,pageSize: 10
        ,url: ideas.config.connector_url
        ,baseParams: {
            action: 'mgr/status/getlist',
            combo: true,
        }
    });
    ideas.combo.Status.superclass.constructor.call(this,config);
};
Ext.extend(ideas.combo.Status,MODx.combo.ComboBox);
Ext.reg('ideas-combo-status',ideas.combo.Status);

