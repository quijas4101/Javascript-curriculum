let resturant = {
    name:'ASB', 
    guestCapacity:75, 
    guestCount:0,
    checkAvailability: function(partySize){
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft;
    }, 
    seatParty: function(partySize){
        this.guestCount += partySize
    }, 

    removeParty: function (partySize) {
        this.guestCount -= partySize
    }
}

//seatParty
resturant.seatParty(72)
console.log(resturant.checkAvailability(4))

//removeParty
resturant.removeParty(5)
console.log(resturant.checkAvailability(4))