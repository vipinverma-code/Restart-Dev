const quotes= [
    "Believe you can and you're halfway there.",
    "The only person you are destined to become is the person you decide to be." ,
    "The question isn't who is going to let me; it's who is going to stop me.",
    "Winning is not a sometime thing; it's an all the time thing." ,
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "You miss 100% of the shots you don't take." ,
    "I alone cannot change the world, but I can cast a stone across the water to create many ripples." ,
    "You become what you believe.",
    "The most difficult thing is the decision to act, the rest is merely tenacity." ,
    "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    "The unexamined life is not worth living." ,
    "Everything you've ever wanted is on the other side of fear." ,
    "Dream big and dare to fail.",
    "You may be disappointed if you fail, but you are doomed if you don't try." ,
    "It does not matter how slowly you go as long as you do not stop." ,
    "Hardships often prepare ordinary people for an extraordinary destiny." ,
    "Too many of us are not living our dreams because we are living our fears." ,
    "I have learned over the years that when one's mind is made up, this diminishes fear." ,
    "I didn't fail the test. I just found 100 ways to do it wrong." ,
    "If you're offered a seat on a rocket ship, don't ask what seat! Just get on." ,
    "I attribute my success to this: I never gave or took any excuse." ,
    "I would rather die of passion than of boredom." 

];

const button=document.getElementById("btn");
const element=document.getElementById("first");
button.addEventListener('click',()=>{
    const index= Math.floor(Math.random()*23);
    element.textContent=quotes[index];
});