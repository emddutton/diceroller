/**
 * Created by emddutton on 3/4/2015.
 */
$(document).ready(function(){

    function reset() {
        $(".dice").removeClass('animated shake');
        $(".dots").hide();
        console.log('bye');
        }

    function roll(side) {
        var one = (side + ".centerdot");
        var two = (side + '.rightcorner');
        var three = (side + '.leftcorner');
        var four = (side + '.rightbottom');
        var five = (side + '.leftbottom');
        var six = (side + '.sideright');
        var seven = (side + '.sideleft');


        var diceroll = Math.floor(Math.random() * 6 + 1);
        if (diceroll == 1) {
           $(one).show();
            console.log('one');
        }
        else if (diceroll == 2) {
            $(three).show();
            $(four).show();
            console.log('two');
        }
        else if (diceroll == 3) {
            $(one).show();
            $(three).show();
            $(four).show();
            console.log('three');
        }
        else if (diceroll == 4) {
            $(two).show();
            $(three).show();
            $(four).show();
            $(five).show();
            console.log('four');
        }
        else if (diceroll == 5) {
            $(one).show();
            $(two).show();
            $(three).show();
            $(four).show();
            $(five).show();
            console.log('five');
        }
        else if (diceroll == 6) {
            $(two).show();
            $(three).show();
            $(four).show();
            $(five).show();
            $(six).show();
            $(seven).show();
            console.log('six');
        }
        return diceroll;
    }


    $('button').on('click', function() {
        reset();
        $(".dice").addClass('animated shake');
        setTimeout(function() {
            roll(".left");
            roll(".right");
        }, 1000);
        });

    });

