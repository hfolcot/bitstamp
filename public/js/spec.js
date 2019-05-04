describe('document ready function', function() {
    it('should render the #results element hidden', function() {
        location.reload;
        expect($('#results').is(':hidden')).toBe(true);
    })
})

describe("appendToHtml function", function() {
    beforeEach(function() {
        data = {"high": "10", 
        "last": "9", 
        "timestamp": "8", 
        "bid": "7", 
        "vwap": "6", 
        "volume": "5", 
        "low": "4", 
        "ask": "3", 
        "open": "2"};        
    })
    it('should change the #results element from hidden to shown', function() {
        appendToHtml(data);
        expect($('#results').is(':visible')).toBe(true);
    });
    it('should append the data to the html element #results in table form', function() {
        appendToHtml(data);
        expect($('#results').html()).toContain('<td id="high">');
    });
});