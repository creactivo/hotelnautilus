$(function () {
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    var $form_wubook_inline = $('#form-wubook-inline');
    var checkin_inline = $form_wubook_inline.find('#id_dfrom').datepicker({
        onRender: function (date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        },
        format: 'dd/mm/yyyy'
    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() > checkout_inline.date.valueOf()) {
            var newDate = new Date(ev.date);
            newDate.setDate(newDate.getDate() + 1);
            checkout_inline.setValue(newDate);
        }
        checkin_inline.hide();
        $form_wubook_inline.find('#id_dto')[0].focus();
    }).data('datepicker');
    var checkout_inline = $form_wubook_inline.find('#id_dto').datepicker({
        onRender: function (date) {
            return date.valueOf() <= checkin_inline.date.valueOf() ? 'disabled' : '';
        },
        format: 'dd/mm/yyyy'
    }).on('changeDate', function (ev) {
        checkout_inline.hide();
        $form_wubook_inline.find('button[type=submit]').focus();
    }).data('datepicker');

    //    Form normal
    var $form_wubook = $('#form-wubook');
    var checkin = $form_wubook.find('#id_dfrom').datepicker({
        onRender: function (date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        },
        format: 'dd/mm/yyyy'
    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date);
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
        }
        checkin.hide();
        $form_wubook.find('#id_dto')[0].focus();
    }).data('datepicker');
    var checkout = $form_wubook.find('#id_dto').datepicker({
        onRender: function (date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        },
        format: 'dd/mm/yyyy'
    }).on('changeDate', function (ev) {
        checkout.hide();
        $form_wubook.find('button[type=submit]').focus();
    }).data('datepicker');
});