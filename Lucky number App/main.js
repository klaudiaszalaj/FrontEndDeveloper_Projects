
function checkNumber(){
    
   const luckyNumber = document.getElementById("writenumber").value;
    
    for (i=0; i<=9; i++){
        if (luckyNumber == i) document.getElementById("pick").innerText = 'You chose number '+i;    }
    
    if (luckyNumber == '0') document.getElementById("resultmain").innerHTML = '<p class="resulttext">This number brings you luck. You have a wondering ability to make people feel calm, happy and comfortable near you. They like to spend time with you and look for your company. You are responsible person and you understand that the success depends on your efforts. But sometimes it is impossible to control everything. Just accept it and do not give up. You have a tendency to be nervous if your plan is not fulfilled. If something goes wrong, you do not have to worry much. With time, everything will be on its places.</p>';
    else if (luckyNumber == 1) document.getElementById("resultmain").innerHTML = '<p class="resulttext">The number one is synonymous to being the “best” in most cultures. The number symbolizes confidence, and you are more than likely a strong leader with an ambitious streak. One lovers also tend to be courageous but can also be selfish and demanding. One is the number of the loner, or someone who will not follow the crowd. It symbolizes the creative spirit and individuality. It is a divine number, referring to the One and only God. The number is also the number of the human being, the only creature on earth to stand up straight on two legs. </p>';
    else if (luckyNumber == 2) document.getElementById("resultmain").innerHTML = '<p class="resulttext">You have probably heard the phrase “all good things come in pairs.” This is seen a lot of places in nature, where there is a partnership between two things. One cannot exist without the other. For example, the sun and moon, day and night, and life and death all coexist. People that favor the number two are intuitive and emotional. These people can also be very shy and easily overwhelmed by negativity. They typically can see both sides of the coin, and be told they have a double personality. They enjoy imagination and know how to creatively persuade people to join their side.</p>';
    else if (luckyNumber == 3) document.getElementById("resultmain").innerHTML = '<p class="resulttext">Three lovers are usually the life of the party. They are very energetic, funny and sociable. If you favor the number three you probably have a strong vision for your future, and can be pretty artistic. However the popularity can get to your head and you can be a bit egotistical too. But you make friends easily. Three is important because it is a number of good fortune in many cultures. It is the first number that forms a geometrical figure – a triangle. Three is sacred in many religions, and is considered the number of harmony, wisdom and understanding.</p>';
    else if (luckyNumber == 4) document.getElementById("resultmain").innerHTML = '<p class="resulttext">If four is your number of choice you are rock solid and reliable. You are very brave, honest, and give your trust to others wisely. You have a clear head most of the time, and truly believe in everything you do. On the down side, you can sometimes be stubborn due to having unwavering beliefs. The number four is the symbol of stability, order and completion of justice. It has a lot of semblance in nature – being the four cardinal points, the four winds, four elements, four phases of the moon and the four seasons. It’s the number of the square, which symbolizes a strong foundation.</p>';
    else if (luckyNumber == 5) document.getElementById("resultmain").innerHTML = '<p class="resulttext">Five is the number of a person always on the go. You are bored easily and therefore like frequent changes in scenery. When you don’t have something to do, you’ll find an activity one way or another. You can be very curious and energetic, but that can sometimes lead you to be a bit dramatic and have trouble making up your mind. The number has a lot of representation when it comes to humans. The number symbolizes the four limbs and the head that controls the limbs. It also combines the female number two with the male number three, making five the number of marriage. It also represents our five senses.</p>';
    else if (luckyNumber == 6) document.getElementById("resultmain").innerHTML = '<p class="resulttext">Six lovers are generally kind, caring and patient. They have lots of ideas they want to share with the world, which can make them a little vain or self-righteous. They are prone to feeling lonely and therefore are clingier in their relationships. They thoroughly enjoy adventurous activities and are brave souls. Six symbolizes beauty, high ideals and completeness. The number 6 is the symbol of Venus, the goddess of love. Six is a perfect number (meaning when all the numbers divisors are added, the sum equals the number itself) which is very rare.</p>';
    else if (luckyNumber == 7) document.getElementById("resultmain").innerHTML = '<p class="resulttext">Those who choose the number sever are likely people with wisdom and book smarts. Due to their higher IQ, they can tend to be more impatient and critical of others. However they are also very loyal and faithful people, who will stick by their loved ones in times of crisis. Number 7 is the number of perfection, security, safety and rest. It’s the most popular number in many cultures and is typically considered to be very lucky.</p>';
    else if (luckyNumber == 8) document.getElementById("resultmain").innerHTML = '<p class="resulttext">Eight lovers don’t need sevens luck to be successful. They tend to be pretty powerful on their own, and work very hard to get what they want. They are very balanced people in terms of both personality and mood and because of this, they are trustworthy people. They look on the bright side of things and are in favor of harmony. Number 8 is a very lucky number in China. In China eight is homonym for prosperity. Number 8 symbolizes the ability to make decisions and power. It’s the most balanced number, being shaped the same on the top and bottom.</p>';
    else if (luckyNumber == 9) document.getElementById("resultmain").innerHTML = '<p class="resulttext">Nine lovers are said to be balanced with a little of all the other number’s traits. They are always trying to reach the highest levels and are usually more fulfilled people. They use their talents and abilities effectively which makes them great leaders. However, you can also be moody at times. If you favor nine you most likely love action and adventure. In some cultures, the number nine is considered unlucky because it is just short of ten. However it is also the number of magic, wisdom and fulfillment. It is also the end of the numerological cycle, as numerology focuses mainly on the numbers one through nine.</p>';
    
    else if (isNaN(luckyNumber)) {
        document.getElementById("resultmain").innerHTML = '<p class="resulttext">Is it really a number?</p>';
        document.getElementById("pick").innerHTML = ' ';   
    }
    
    else if (luckyNumber > 9) {
        document.getElementById("resultmain").innerHTML = '<p class="resulttext">Choose only from 0 to 9!</p>';
        document.getElementById("pick").innerHTML = ' '; 
    } 
    
    else  {
        document.getElementById("resultmain").innerHTML = '<p class="resulttext">You have to pick some number to get a result</p>';
        document.getElementById("pick").innerHTML = ' '; 
    }
        
}

