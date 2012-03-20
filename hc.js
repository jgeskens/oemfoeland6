// HyperCard-like functionality in HTML5

$(function(){
    var cards = null;
    var currentCardId = 0;
    
    var serializeCard = function(){
        var formData = $('#card').serializeArray();
        $('.field').each(function(){
            var field = $(this);
            formData.push({'name': field.attr('id'), 'value': field.html()});
        });
        
        return formData;
    };
    
    var populateCard = function(serializedCard){
        $('input.field[type="checkbox"]').attr('checked', false);
        $('input.field[type="radio"]').attr('checked', false);
        
        for (var i = 0; i < serializedCard.length; i++)
        {
            var name = serializedCard[i].name;
            if (name === '')
                continue;
            var value = serializedCard[i].value;
            var field = $('#' + name + '.field');
            if (field.length > 0)
            {
                field.html(value);
            }
            else
            {
                console.log(name);
                console.log(value);
                if ($('input.field[name="' + name + '"][type!="checkbox"][type!="radio"]').val(value).length === 0)
                    $('input.field[name="' + name + '"][value="' + value.replace(/"/g, "\\\"") + '"]').attr('checked', true);
            }
        }
        
        connectHandlers();
    };
    
    var loadCards = function(){
        cards = window.localStorage.getItem('cards');
        if (cards === null)
            cards = [serializeCard()];
        else
            cards = JSON.parse(cards);
    };
    
    var saveCards = function(){
        window.localStorage.setItem('cards', JSON.stringify(cards));
    };
    
    var startup = function(){
        loadCards();
        console.log(cards);
        populateCard(getCurrentCard());
    };
    
    var getCurrentCard = function(){
        return cards[currentCardId];
    };
    
    var setCurrentCard = function(serializedCard){
        cards[currentCardId] = serializedCard;
    };
    
    var goToCard = function(newCardId){
        setCurrentCard(serializeCard());
        saveCards();
        currentCardId = newCardId;
        populateCard(getCurrentCard());
    };
    
    var clearCard = function(){
        $('#card input[type!="checkbox"][type!="radio"]').not(':button, :submit, :reset, :hidden').val('');
        $('#card input[type="checkbox"]').removeAttr('checked');
        $('#card input[type="radio"]').removeAttr('checked');
        $('#card .field').html('');
        
        setCurrentCard(serializeCard());
    };
    
    var connectHandlers = function(){
        $('input.previousCard').unbind().click(function(){
            if (currentCardId > 0)
                goToCard(currentCardId - 1);
            console.log(currentCardId);
            console.log(cards);
        });
        
        $('input.nextCard').unbind().click(function(){
            if (currentCardId < cards.length - 1)
                goToCard(currentCardId + 1);
            console.log(currentCardId);
            console.log(cards);
        });
        
        $('input.newCard').unbind().click(function(){
            cards.push(serializeCard());
            goToCard(cards.length - 1);
            clearCard();
            saveCards();
            console.log(currentCardId);
            console.log(cards);
        });
        
        $('input.deleteCard').unbind().click(function(){
            if (cards.length > 1)
            {
                cards.splice(currentCardId, 1);
                if (currentCardId >= cards.length)
                    currentCardId = cards.length - 1;
                saveCards();
                populateCard(getCurrentCard());
            }
            console.log(currentCardId);
            console.log(cards);
        });
    };
    startup();
});
