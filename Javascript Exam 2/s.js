function generateRandomNumber() {
        var array = [100, 2000, 2, 3, 4, 5, 6, 78, 89,12,45,75,88];
        var randomIndex = Math.floor(Math.random() * array.length);
        var randomElement = array[randomIndex];                             //Here using the random index the code retreives the random element from the array.
        document.getElementById("random_number").innerHTML = randomElement;
        console.log(randomElement);
        document.getElementById("lot").innerHTML = randomElement;
    }
