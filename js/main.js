$(document).ready(function() {

    // toggle map visibility
    $("#toggle-map").click(function() {
        $(".target-map").toggle('left');
    });
    // toggle contact form visibility
    $("#toggle-form").click(function() {
        $(".target-form").toggle('left');
    });

    // hide one on click 
    $(document).on("click", "#toggle-map", function(event) {
        $(".target-form").hide();
        event.preventDefault();
        if ($(this).hasClass("isDown")) {
            $(".left-part").stop().animate({ left: "0px" }, 100);
        } else {
            $(".left-part").stop().animate({ left: "-245px" }, 100);
        }
        $(this).toggleClass("isDown");
        return false;
    });

    $(document).on("click", "#toggle-form", function(event) {
        $(".target-map").hide();
        event.preventDefault();
        if ($(this).hasClass("isDown")) {
            $(".left-part").stop().animate({ left: "0px" }, 100);
        } else {
            $(".left-part").stop().animate({ left: "-245px" }, 100);
        }
        $(this).toggleClass("isDown");
        return false;
    });

});

// Contact form floating labels

// form validation of phone number input
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

$(document).ready(function() {
    // Test for placeholder support
    $.support.placeholder = (function() {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form-label').each(function() {
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e) {

            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            switch (e.type) {
                case 'keyup':
                    {
                        $parent.toggleClass('js-hide-label', $this.val() == '');
                    }
                    break;
                case 'blur':
                    {
                        if ($this.val() == '') {
                            $parent.addClass('js-hide-label');
                        } else {
                            $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                        }
                    }
                    break;
                case 'focus':
                    {
                        if ($this.val() !== '') {
                            $parent.removeClass('js-unhighlight-label');
                        }
                    }
                    break;
                default:
                    break;
            }
        });
    }
});