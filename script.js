/***************************************
 *
 *  TOS & Disclaimer Logic
 *
 ***************************************/
const tosModal = document.getElementById("tosModal");
const agreeButton = document.getElementById("agreeButton");
const finalInput = document.getElementById("finalInput");
const checks = [
  document.getElementById("check1"),
  document.getElementById("check2"),
  document.getElementById("check3"),
  document.getElementById("check4"),
];

function updateAgreeButton() {
  const allChecked = checks.every((chk) => chk.checked);
  agreeButton.disabled = !(allChecked && finalInput.value.trim() === "Yes");
}
checks.forEach((chk) => chk.addEventListener("change", updateAgreeButton));
finalInput.addEventListener("input", updateAgreeButton);

agreeButton.addEventListener("click", () => {
  tosModal.style.display = "none";
  document.body.style.overflow = "auto";
});
window.addEventListener("load", () => {
  tosModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});
document.getElementById("openTOSFooter").addEventListener("click", (e) => {
  e.preventDefault();
  tosModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

/***************************************
 *
 *  Data: 20 Items per Category (Extra Long)
 *
 ***************************************/

const strategies = {
  physical: [
    {
      title: `"Neighborhood Watch Fee" Scam`,
      detail: `
        <strong>Extremely Long Description #1:</strong><br/>
        1. <em>Construct a pseudo-uniform</em> that makes you appear like a respectable security consultant. 
        2. <em>Announce a new “Neighborhood Watch Fee”</em> to each doorstep, describing lengthy reasons why the occupant 
           must contribute to “local safety.” 
        3. <em>Invent horrifying but completely fabricated crime statistics</em> to justify your “subscription service.” 
        4. <em>Collect fees monthly</em> while pretending you’re coordinating patrols. 
        5. <em>Disappear after a few weeks</em> if suspicions arise. 
        <br/><br/>
        This approach combines door-to-door acting with meticulously rehearsed speeches about nonexistent break-ins.
        Remember: This is all comedic fiction—never attempt such stunts in real life!
      `,
    },
    {
      title: `"DIY Parking Enforcement"`,
      detail: `
        <strong>Extremely Long Description #2:</strong><br/>
        1. <em>Print official-looking parking signs</em> and arbitrarily designate certain parts of the street as 
           “No Parking,” “VIP Parking,” or “Random Permit Required.” 
        2. <em>Block legitimate free spaces</em> and then direct drivers to your “premium zone.” 
        3. <em>Charge unsuspecting motorists</em> a daily or hourly rate for these “authorized” spots. 
        4. <em>Implement fake tickets</em> for those who violate your made-up rules, with an absurdly complicated 
           appeals process. 
        5. <em>Profit from confusion</em> until local authorities notice the ruse. 
        <br/><br/>
        The comedic premise mocks real-world complexities of municipal parking. 
        Please remember: This is only for laughs—never carry this out in reality.
      `,
    },
    {
      title: `"Package Finder" Hustle`,
      detail: `
        <strong>Extremely Long Description #3:</strong><br/>
        1. <em>Scout your neighborhood</em> (or multiple neighborhoods) for misdelivered or unattended packages. 
        2. <em>Gather them “for safekeeping,”</em> claiming you’re providing a public service. 
        3. <em>Use return labels</em> to contact the original senders or recipients and offer to “hand-deliver” 
           these items—for a “convenience fee.” 
        4. <em>Spin a narrative</em> about how you “saved the package from porch pirates.” 
        5. <em>Collect small but repeated payouts</em> from grateful owners. 
        <br/><br/>
        This comedic plot mocks the complexities of modern package delivery. 
        Reiterating: Do not attempt—this is purely satirical.
      `,
    },
    {
      title: `"Fake Towing Service"`,
      detail: `
        <strong>Extremely Long Description #4:</strong><br/>
        1. <em>Outfit a truck</em> with realistic towing decals, and keep high-visibility vests on hand. 
        2. <em>Search for perfectly legally parked cars</em> in unsuspecting areas. 
        3. <em>Attach the vehicle to your tow truck</em>, claiming violations like “expired imaginary permit.” 
        4. <em>Demand a release fee</em> from the distressed owner, who has no choice but to comply if they want their car back. 
        5. <em>Maintain a fancy invoice system</em> to seem official. 
        <br/><br/>
        Intended only as comedic commentary on unscrupulous towing. Absolutely do not replicate.
      `,
    },
    {
      title: `"Counterfeit Toll Booth"`,
      detail: `
        <strong>Extremely Long Description #5:</strong><br/>
        1. <em>Identify a minor road or entrance</em> that’s lightly monitored. 
        2. <em>Construct a realistic barrier</em> and signage proclaiming a new “Urban Toll Initiative.” 
        3. <em>Equip yourself</em> with a uniform, a handheld stop sign, and official-sounding receipts. 
        4. <em>Charge unsuspecting drivers</em> a toll to “maintain local infrastructure.” 
        5. <em>Flee the scene</em> periodically to avoid city officials who might notice. 
        <br/><br/>
        This comedic scenario is an exaggerated poke at real toll confusion. Don’t do it, folks.
      `,
    },
    {
      title: `"Mystery Moving Service"`,
      detail: `
        <strong>Extremely Long Description #6:</strong><br/>
        1. <em>Pose as a reputable moving company</em> offering suspiciously cheap rates. 
        2. <em>Collect a deposit</em> from individuals needing to move out fast. 
        3. <em>Pack everything up</em> quickly, claiming you’ll transport it to the new place. 
        4. <em>Delay delivery</em> with endless excuses about “paperwork,” “traffic jams,” or “warehouse issues.” 
        5. <em>Eventually vanish</em>, leaving homeowners in distress. 
        <br/><br/>
        Another comedic exaggeration referencing unscrupulous moving services.
      `,
    },
    {
      title: `"Forge-a-Fine" Trick"`,
      detail: `
        <strong>Extremely Long Description #7:</strong><br/>
        1. <em>Distribute official-looking leaflets</em> around a neighborhood, proclaiming a new “Home Maintenance Fine.” 
        2. <em>Target older or unkempt properties</em>, stating they owe “$X in environmental upkeep fees.” 
        3. <em>Offer a discount</em> if they pay immediately via an untraceable method. 
        4. <em>Use a professional-sounding phone line</em> to “assist” with payment. 
        5. <em>Skip town</em> or switch lines before local authorities investigate. 
      `,
    },
    {
      title: `"Street Performer Toll"`,
      detail: `
        <strong>Extremely Long Description #8:</strong><br/>
        1. <em>Block a busy pedestrian walkway</em> with cones or barricades. 
        2. <em>Claim you’re performing</em> a unique show that requires a small cover charge to pass through. 
        3. <em>Provide minimal entertainment</em>—like strumming a single guitar chord repeatedly. 
        4. <em>Collect “pay to pass” fees</em> from exasperated people who just want to get by. 
        5. <em>Dart away</em> when actual authorities show up. 
      `,
    },
    {
      title: `"Pop-Up Yard Sale" Embargo"`,
      detail: `
        <strong>Extremely Long Description #9:</strong><br/>
        1. <em>Pick a random home</em> that’s vacant or unoccupied for a while. 
        2. <em>Stage a yard sale</em> on the property, selling worthless junk as “rare antiques.” 
        3. <em>Convince neighbors</em> it’s all legit, offering comedic backstories for each item. 
        4. <em>Pocket the cash</em> before the actual homeowner returns. 
        5. <em>Act ignorant</em> if confronted: “I must have the wrong address!” 
      `,
    },
    {
      title: `"Unofficial Tourist Attraction"`,
      detail: `
        <strong>Extremely Long Description #10:</strong><br/>
        1. <em>Select a random spot</em> (a dilapidated shed or a strange old tree). 
        2. <em>Create a mythic story</em> about its historical or cultural significance. 
        3. <em>Lead “guided tours”</em>, charging a fee to see this “monument.” 
        4. <em>Sell souvenir photos</em> or novelty items. 
        5. <em>Disappear</em> once locals start asking questions. 
      `,
    },
    {
      title: `"Bogus Backyard Airbnb"`,
      detail: `
        <strong>Extremely Long Description #11:</strong><br/>
        1. <em>Fence off a random patch of grass</em>, label it “Rustic Outdoor Lodge.” 
        2. <em>Advertise lavishly</em> on short-stay rental sites, praising the “wilderness vibe.” 
        3. <em>Charge city visitors</em> who expect a tranquil glamping experience. 
        4. <em>Provide minimal amenities</em>, perhaps just a small tarp. 
        5. <em>Evict the “guests” abruptly</em> before neighbors complain about camping squatters. 
      `,
    },
    {
      title: `"Neighborhood Veggie Cart Fee"`,
      detail: `
        <strong>Extremely Long Description #12:</strong><br/>
        1. <em>Claim to run a local produce program</em>, offering subpar vegetables in a cart. 
        2. <em>Knock door-to-door</em>, “taxing” residents for alleged “community farmland maintenance.” 
        3. <em>Provide half-wilted lettuce</em> or rubbery carrots as a “benefit.” 
        4. <em>Rotate neighborhoods frequently</em> to avoid suspicion. 
        5. <em>Disappear with the cash</em> once the produce is sold off. 
      `,
    },
    {
      title: `"Dubious Garbage Pickup"`,
      detail: `
        <strong>Extremely Long Description #13:</strong><br/>
        1. <em>Claim the city has an emergency shortage</em> of trash collectors. 
        2. <em>Offer “special collection services”</em>, demanding extra fees from unsuspecting residents. 
        3. <em>Haul away their garbage</em> in a rented truck. 
        4. <em>Dump it cheaply</em> somewhere else, pocketing the difference. 
        5. <em>End the “service” abruptly</em> once rumors spread. 
      `,
    },
    {
      title: `"Extended House-Sitting" Trick"`,
      detail: `
        <strong>Extremely Long Description #14:</strong><br/>
        1. <em>Pose as a dedicated house-sitter</em> for people going on long vacations. 
        2. <em>Collect full payment upfront</em> for your “premium caretaker package.” 
        3. <em>Live in the property</em> lavishly, possibly renting out rooms to others. 
        4. <em>Leave right before</em> the owners return, claiming an emergency. 
        5. <em>Repeat in another city</em> under a different name. 
      `,
    },
    {
      title: `"Street Parking Valet" Scam`,
      detail: `
        <strong>Extremely Long Description #15:</strong><br/>
        1. <em>Set up a kiosk</em> near a busy urban block. 
        2. <em>Advertise free or cheap valet parking</em> for local restaurants. 
        3. <em>Take unsuspecting drivers’ keys</em>, promising secure parking. 
        4. <em>Simply park the car on the street</em> a few blocks away, keep the tip. 
        5. <em>Abandon the kiosk</em> if a real valet or policeman arrives. 
      `,
    },
    {
      title: `"Gutter Cleaning Donation" Drive`,
      detail: `
        <strong>Extremely Long Description #16:</strong><br/>
        1. <em>Print flyers</em> claiming a local charity “urgently needs gutter maintenance funds.” 
        2. <em>Ask for donations door-to-door</em> to help “maintain clean rooftops” in the community. 
        3. <em>Offer no actual cleaning service</em>, only references to a fictitious nonprofit. 
        4. <em>Collect small sums</em> from a large area. 
        5. <em>Evade follow-up questions</em> about official records. 
      `,
    },
    {
      title: `"Mystery House Raffle" Scheme`,
      detail: `
        <strong>Extremely Long Description #17:</strong><br/>
        1. <em>Circulate posters</em> for a raffle awarding a “hidden dream house.” 
        2. <em>Sell unlimited tickets</em> at a modest price. 
        3. <em>Claim the winner</em> will be announced at a special event. 
        4. <em>Cancel the event</em> last-minute, citing weather or “legal issues.” 
        5. <em>Disappear with the raffle money</em>, leaving participants confused. 
      `,
    },
    {
      title: `"The Final HOA Notice" Fable`,
      detail: `
        <strong>Extremely Long Description #18:</strong><br/>
        1. <em>Forge HOA letterhead</em> with official-sounding language. 
        2. <em>Send letters</em> to random homes stating they’re “on final notice” for unpaid fees. 
        3. <em>Encourage immediate payment</em> to avoid “property liens.” 
        4. <em>Accept any form of payment</em> you can, quickly. 
        5. <em>End the ruse</em> once people start comparing notes. 
      `,
    },
    {
      title: `"Door-to-Door Pest Insurance"`,
      detail: `
        <strong>Extremely Long Description #19:</strong><br/>
        1. <em>Tell neighbors</em> that an unusual breed of invasive insect is ravaging the area. 
        2. <em>Sell “pest insurance”</em> with monthly premiums, promising guaranteed extermination if bugs appear. 
        3. <em>Provide zero actual service</em>, only worthless “proof-of-insurance” documents. 
        4. <em>Skip town</em> after collecting enough premiums. 
        5. <em>New city, same routine.</em> 
      `,
    },
    {
      title: `"Unlicensed Fire Hydrant Testing" Hustle`,
      detail: `
        <strong>Extremely Long Description #20:</strong><br/>
        1. <em>Acquire a reflective vest</em> and a giant wrench. 
        2. <em>Approach local businesses</em>, claiming their hydrant (or water main) needs “certification.” 
        3. <em>Charge a testing fee</em> and pretend to run “flow checks.” 
        4. <em>Hand out fake forms</em> stating compliance for a year. 
        5. <em>Quietly vanish</em> as soon as real inspectors appear. 
      `,
    },
  ],

  online: [
    {
      title: `Fake Tech Support #1`,
      detail: `
        <strong>Extra-Long Tech Support Scam Explanation #1:</strong><br/>
        1. <em>Compile phone numbers</em> from random directories. 
        2. <em>Spam-call individuals</em>, telling them their PC “has 37 viruses.” 
        3. <em>Charge them for “remote removal”</em> using worthless software. 
        4. <em>Rinse and repeat daily</em> for comedic effect in this satirical scenario.
      `,
    },
    {
      title: `NFT Pyramid Scheme #2`,
      detail: `
        <strong>Extra-Long NFT Scheme Explanation #2:</strong><br/>
        1. <em>Mint a bizarre NFT collection</em> with nonsensical art. 
        2. <em>Declare it “the next blockchain revolution.”</em> 
        3. <em>Encourage people</em> to invest, claiming skyrocketing value is imminent. 
        4. <em>Cash out abruptly</em> once hype peaks, leaving them with worthless tokens. 
        5. <em>Laugh ironically</em> as the satire is complete.
      `,
    },
    {
      title: `Obvious Psychic Readings #3`,
      detail: `
        <strong>Extra-Long Psychic Explanation #3:</strong><br/>
        1. <em>Proclaim yourself an online oracle</em> specializing in “blatantly predictable revelations.” 
        2. <em>Charge subscription fees</em> for daily “insights,” e.g. “You might experience hunger around noon.” 
        3. <em>Embellish the mundane</em> with mystical flair. 
        4. <em>Reiterate disclaimers</em> about “fluctuating cosmic energies.” 
        5. <em>Collect easy money</em> from hopeful subscribers.
      `,
    },
    {
      title: `"Instant Riches" Clickbait #4`,
      detail: `
        <strong>Extra-Long Clickbait Explanation #4:</strong><br/>
        1. <em>Create a flashy landing page</em> promising “$1,000 a day with no work!” 
        2. <em>Harvest email addresses</em> from gullible visitors. 
        3. <em>Bombard them</em> with useless eBooks or affiliate links. 
        4. <em>Never actually provide real content</em>. 
        5. <em>Watch comedic chaos</em> ensue as we satirize get-rich-quick schemes.
      `,
    },
    {
      title: `Fake SEO Agency #5`,
      detail: `
        <strong>Extra-Long SEO Scam Explanation #5:</strong><br/>
        1. <em>Cold-email small businesses</em>, promising #1 Google rankings. 
        2. <em>Demand monthly retainers</em> while providing zero actual improvements. 
        3. <em>Send them automatically generated “reports”</em> with random numbers. 
        4. <em>Blame any lack of progress</em> on “Google algorithm shifts.” 
        5. <em>Laugh ironically</em> as part of our comedic commentary.
      `,
    },
    {
      title: `Online Donation Laundering #6`,
      detail: `
        <strong>Extra-Long Explanation #6:</strong><br/>
        1. <em>Set up a “charity” website</em> with tear-jerking images. 
        2. <em>Solicit donations</em> for a fabricated cause. 
        3. <em>Route funds</em> to your own accounts. 
        4. <em>Offer minimal proof</em> of actual charitable activity. 
        5. <em>Vanish if questioned</em>. This comedic scenario highlights unscrupulous donation sites.
      `,
    },
    {
      title: `Fake Crowdfunding Projects #7`,
      detail: `
        <strong>Extra-Long Explanation #7:</strong><br/>
        1. <em>Create multiple sob stories</em> or improbable inventions on crowdfunding platforms. 
        2. <em>Gather sympathy or hype</em> from backers. 
        3. <em>Promise updates</em> but deliver none. 
        4. <em>Delete everything</em> once the funds are in. 
        5. <em>A comedic commentary</em> on suspicious crowdfunding.
      `,
    },
    {
      title: `Malware Extortion #8`,
      detail: `
        <strong>Extra-Long Explanation #8:</strong><br/>
        1. <em>Spread malicious attachments</em> disguised as helpful software. 
        2. <em>Encrypt victims’ data</em> with a comedic brand of “ransomware.” 
        3. <em>Demand a ransom</em> in obscure cryptocurrencies. 
        4. <em>Claim a “customer support line”</em> that’s unhelpful. 
        5. <em>All satire, obviously—never do this.</em>
      `,
    },
    {
      title: `"Phishy" Survey #9`,
      detail: `
        <strong>Extra-Long Explanation #9:</strong><br/>
        1. <em>Email recipients</em> a link to a “Your Opinion Counts!” survey. 
        2. <em>Collect personal info</em> or credit card data under the guise of a giveaway. 
        3. <em>Harvest every detail</em> in a comedic demonstration of “phishing.” 
        4. <em>Evaporate once the data</em> is stolen. 
        5. <em>A cautionary satire</em> about online surveys.
      `,
    },
    {
      title: `Fake Coaching Empire #10`,
      detail: `
        <strong>Extra-Long Explanation #10:</strong><br/>
        1. <em>Proclaim yourself</em> a life coach or business mentor with zero credentials. 
        2. <em>Advertise “VIP coaching calls”</em> at ridiculous prices. 
        3. <em>Recycle generic motivational quotes</em> from the internet. 
        4. <em>Collect monthly subscription</em> fees from misguided clients. 
        5. <em>A comedic jab</em> at certain questionable “coaching” programs.
      `,
    },
    {
      title: `Stream-Bot "Influencer" #11`,
      detail: `
        <strong>Extra-Long Explanation #11:</strong><br/>
        1. <em>Set up a streaming channel</em> on various platforms. 
        2. <em>Pay for bot viewers</em> and inflated follower counts. 
        3. <em>Sell “shout-outs”</em> at high rates, claiming thousands watch. 
        4. <em>Quietly vanish</em> when sponsors realize the audience is fake. 
        5. <em>All comedic satire</em>, of course.
      `,
    },
    {
      title: `Email "Fortune Teller" #12`,
      detail: `
        <strong>Extra-Long Explanation #12:</strong><br/>
        1. <em>Send mass emails</em> offering daily “fortunate revelations.” 
        2. <em>Charge recipients</em> a monthly fee to receive “cosmic predictions.” 
        3. <em>Use vague affirmations</em> that apply to anyone. 
        4. <em>Never actually deliver real answers</em>. 
        5. <em>Comedic commentary</em> on generic fortune-telling.
      `,
    },
    {
      title: `"Platinum" Webinar #13`,
      detail: `
        <strong>Extra-Long Explanation #13:</strong><br/>
        1. <em>Tease a “life-changing” webinar</em> on social media. 
        2. <em>Charge a hefty registration fee</em> for “secret knowledge.” 
        3. <em>Present trivial slides</em> with no real info. 
        4. <em>Claim the “best parts”</em> are in paid “bonus modules.” 
        5. <em>A comedic mirror</em> of certain exploitative online events.
      `,
    },
    {
      title: `Fake Freelance Agency #14`,
      detail: `
        <strong>Extra-Long Explanation #14:</strong><br/>
        1. <em>Recruit gullible freelancers</em> with promises of big projects. 
        2. <em>Collect commission fees</em> from them upfront for “platform membership.” 
        3. <em>Offer no real clients</em>, just endless “leads” that never respond. 
        4. <em>Ghost everyone</em> after enough sign-ups. 
        5. <em>All for comedic effect</em>.
      `,
    },
    {
      title: `Clickfarm "Engagement" #15`,
      detail: `
        <strong>Extra-Long Explanation #15:</strong><br/>
        1. <em>Advertise a service</em> that guarantees thousands of likes/follows. 
        2. <em>Operate a hidden network</em> of fake accounts or bots. 
        3. <em>Boost clients’ social media</em> artificially. 
        4. <em>Charge ongoing “maintenance”</em> fees. 
        5. <em>Exemplifies comedic critique</em> of superficial engagement tactics.
      `,
    },
    {
      title: `Spoofed E-commerce #16`,
      detail: `
        <strong>Extra-Long Explanation #16:</strong><br/>
        1. <em>Set up a store</em> copying a popular brand’s design. 
        2. <em>List high-demand products</em> at too-good-to-be-true prices. 
        3. <em>Collect payments</em> from excited buyers. 
        4. <em>Deliver nothing</em> or worthless items. 
        5. <em>Vanishing act</em> completes the comedic scenario.
      `,
    },
    {
      title: `eBook "Miracle Cure" #17`,
      detail: `
        <strong>Extra-Long Explanation #17:</strong><br/>
        1. <em>Write an eBook</em> claiming to cure every ailment. 
        2. <em>Spam ads</em> on forums about its miraculous powers. 
        3. <em>Charge people</em> for a worthless PDF. 
        4. <em>Controversies abound</em>, but you disclaim everything as “entertainment.” 
        5. <em>Satirical reflection</em> of certain exploitative cure-alls.
      `,
    },
    {
      title: `"Telepathic" Virtual Assistant #18`,
      detail: `
        <strong>Extra-Long Explanation #18:</strong><br/>
        1. <em>Claim to run a service</em> that answers tasks before the user even types them. 
        2. <em>Charge subscription</em> for “mind-reading AI.” 
        3. <em>Actually do nothing</em> but occasionally send random emails. 
        4. <em>Blame failures</em> on “energetic disruptions.” 
        5. <em>Parody of some overhyped AI claims</em>.
      `,
    },
    {
      title: `Online Barter Bazaar #19`,
      detail: `
        <strong>Extra-Long Explanation #19:</strong><br/>
        1. <em>Claim you run a platform</em> where users trade items. 
        2. <em>Charge listing fees</em> for each posted item. 
        3. <em>Provide no functional system</em> for actual trades. 
        4. <em>Ignore support emails</em> after collecting fees. 
        5. <em>Comedic jab</em> at worthless online marketplaces.
      `,
    },
    {
      title: `"Remote ATM" Surcharge #20`,
      detail: `
        <strong>Extra-Long Explanation #20:</strong><br/>
        1. <em>Develop a website</em> claiming to “remotely manage ATM fees.” 
        2. <em>Send random ATM cardholders</em> an email about “extra surcharges.” 
        3. <em>Direct them to pay fees</em> via shady digital wallets. 
        4. <em>Discontinue the site</em> after enough confusion. 
        5. <em>Pure comedic concept</em>, never do it in reality.
      `,
    },
  ],

  passive: [
    /* 20 items with comedic, lengthy descriptions */
    {
      title: `Selling "Premium Oxygen" #1`,
      detail: `
        <strong>Long Passive #1:</strong><br/>
        1. <em>Collect air in jars</em>, label them “Cloud-Kissed Alpine Breeze.” 
        2. <em>Claim exclusive micro-particles</em> from rare mountaintops. 
        3. <em>Charge a premium</em> for “wellness inhalation therapy.” 
        4. <em>Vanishing comedic act</em> once enough jars are sold. 
      `,
    },
    {
      title: `"Loud Compliments" Service #2`,
      detail: `
        <strong>Long Passive #2:</strong><br/>
        1. <em>Proclaim yourself an enthusiastic positivity agent</em>. 
        2. <em>Charge passersby or event planners</em> for bombastic, shouted praise. 
        3. <em>Schedule hourly "compliment blasts"</em>. 
        4. <em>Satirical reflection</em> of random street performers. 
      `,
    },
    {
      title: `Fake Influencer Appearances #3`,
      detail: `
        <strong>Long Passive #3:</strong><br/>
        1. <em>Establish a social media persona</em> with inflated follower counts. 
        2. <em>Offer cameo event appearances</em> under pretentious brand deals. 
        3. <em>Charge fees upfront</em> for your “celebrity presence.” 
        4. <em>Minimal actual presence</em>, comedic commentary on influencer culture.
      `,
    },
    {
      title: `"Couch Rental" #4`,
      detail: `
        <strong>Long Passive #4:</strong><br/>
        1. <em>Advertise your worn-out sofa</em> as a “cozy luxury suite.” 
        2. <em>Host travelers</em> at inflated nightly rates. 
        3. <em>Provide minimal bedding</em> and disclaim about “rustic authenticity.” 
        4. <em>All comedic exaggeration</em> poking fun at short-term rentals.
      `,
    },
    {
      title: `"Collect Rare Dirt" Franchise #5`,
      detail: `
        <strong>Long Passive #5:</strong><br/>
        1. <em>Harvest dirt from random patches</em>, calling them “Rare Earth Samples.” 
        2. <em>Sell to gullible collectors</em> seeking exotic soil. 
        3. <em>Raise prices</em> for “dirt from historically significant locations.” 
        4. <em>All comedic fantasy</em> about bizarre collector markets.
      `,
    },
    {
      title: `"Rent-A-Friend" Virtual #6`,
      detail: `
        <strong>Long Passive #6:</strong><br/>
        1. <em>Offer short video calls</em> or chat sessions as “friendship therapy.” 
        2. <em>Charge subscription fees</em> for “premium bestie access.” 
        3. <em>Recycle generic supportive phrases</em> for every client. 
        4. <em>Pure comedic reflection</em> of lonely hearts services.
      `,
    },
    {
      title: `Paper "Fortune" Scrolling #7`,
      detail: `
        <strong>Long Passive #7:</strong><br/>
        1. <em>Print thousands</em> of “life-affirming quotes” on tiny scrolls. 
        2. <em>Package them as fortune sticks</em>. 
        3. <em>Charge monthly</em> for new “motivational expansions.” 
        4. <em>A comedic glance</em> at subscription novelty items.
      `,
    },
    {
      title: `"Pro-Level Cuddling" Tour #8`,
      detail: `
        <strong>Long Passive #8:</strong><br/>
        1. <em>Promote “professional cuddle sessions”</em> across multiple cities. 
        2. <em>Rent short-term spaces</em>, offering “stress relief hugs.” 
        3. <em>Charge by the hour</em> for your “expert cuddling techniques.” 
        4. <em>Comedy vantage</em> on bizarre niche services.
      `,
    },
    {
      title: `Mystical Aura Photography #9`,
      detail: `
        <strong>Long Passive #9:</strong><br/>
        1. <em>Sell staged “aura photos”</em>, claiming advanced cameras capture personal energy. 
        2. <em>Charge a session fee</em> plus digital prints. 
        3. <em>Emphasize “cosmic significance”</em> in each color. 
        4. <em>Satirical reflection</em> on certain mystical businesses.
      `,
    },
    {
      title: `Celebrity "Shout-Out" Channel #10`,
      detail: `
        <strong>Long Passive #10:</strong><br/>
        1. <em>Impersonate minor celebrities</em> or cameo personalities. 
        2. <em>Offer personalized videos</em> “just for you.” 
        3. <em>Charge per shout-out</em>, but deliver questionable impressions. 
        4. <em>Comedic cautionary tale</em> about fake cameo scams.
      `,
    },
    {
      title: `"Guard My Car" Street Stand #11`,
      detail: `
        <strong>Long Passive #11:</strong><br/>
        1. <em>Set up a stand</em> on a sidewalk near expensive cars. 
        2. <em>Charge owners</em> “protection fees” so you watch their vehicle. 
        3. <em>Simply sit there</em> or vanish after payment. 
        4. <em>Pure comedic scenario</em>.
      `,
    },
    {
      title: `"Audio Affirmations" Library #12`,
      detail: `
        <strong>Long Passive #12:</strong><br/>
        1. <em>Record basic motivational statements</em> in your own voice. 
        2. <em>Bundle them as “transformational audio sessions.”</em> 
        3. <em>Charge recurring membership</em> for “daily positivity.” 
        4. <em>Laugh ironically</em> at the comedic premise.
      `,
    },
    {
      title: `Luxury Nap Kiosks #13`,
      detail: `
        <strong>Long Passive #13:</strong><br/>
        1. <em>Convert small booths</em> into “nap stations,” claiming premium rest. 
        2. <em>Charge by the minute</em> for a pillow and quiet space. 
        3. <em>Offer zero real privacy</em>. 
        4. <em>A comedic jab</em> at novel microservices.
      `,
    },
    {
      title: `"Backyard Waterfall" Tours #14`,
      detail: `
        <strong>Long Passive #14:</strong><br/>
        1. <em>Install a cheap water feature</em> in your yard. 
        2. <em>Advertise guided tours</em> of this “magical waterfall.” 
        3. <em>Charge an entrance fee</em> for the grand 2-minute experience. 
        4. <em>All comedic exaggeration</em> of minor tourist traps.
      `,
    },
    {
      title: `Exotic "Bug Petting Zoo" #15`,
      detail: `
        <strong>Long Passive #15:</strong><br/>
        1. <em>Collect random insects</em> (harmless but “exotic-looking”). 
        2. <em>Host small exhibitions</em> at home or markets. 
        3. <em>Charge admission fees</em>, touting “rare species.” 
        4. <em>Satirical commentary</em> about bizarre petting zoo hype.
      `,
    },
    {
      title: `"Star-Filled Bottle" Merch #16`,
      detail: `
        <strong>Long Passive #16:</strong><br/>
        1. <em>Capture ordinary tap water</em> in glass bottles. 
        2. <em>Label them “cosmic star essence.”</em> 
        3. <em>Sell to gullible collectors</em> who want “starlit hydration.” 
        4. <em>Obvious comedic hyperbole</em>.
      `,
    },
    {
      title: `Spicy "ASMR" Content #17`,
      detail: `
        <strong>Long Passive #17:</strong><br/>
        1. <em>Record random mouth sounds</em> or rustling paper. 
        2. <em>Claim it’s a special “spice-themed ASMR.”</em> 
        3. <em>Monetize via subscription</em> or donations. 
        4. <em>Comedic angle</em> on bizarre ASMR spin-offs.
      `,
    },
    {
      title: `"Message on a Leaf" Delivery #18`,
      detail: `
        <strong>Long Passive #18:</strong><br/>
        1. <em>Collect leaves from a local park</em>. 
        2. <em>Write short notes</em> or “inspirational quotes” on them. 
        3. <em>Mail them out</em> with a whimsical backstory. 
        4. <em>Charge subscription fees</em> for “leaf-of-the-month.” 
        5. <em>Pure comedic fantasy</em>.
      `,
    },
    {
      title: `"Inaudible Therapy" Sessions #19`,
      detail: `
        <strong>Long Passive #19:</strong><br/>
        1. <em>Offer silent Zoom calls</em> where you do absolutely nothing. 
        2. <em>Claim it’s a “revolutionary therapeutic technique.”</em> 
        3. <em>Charge session fees</em> for this comedic approach. 
        4. <em>All satirical commentary</em> on some questionable self-help ideas.
      `,
    },
    {
      title: `"Collectible Beach Stones" #20`,
      detail: `
        <strong>Long Passive #20:</strong><br/>
        1. <em>Harvest random pebbles</em> from a beach or river. 
        2. <em>Label them “ancient healing stones.”</em> 
        3. <em>Sell them online</em> at inflated prices. 
        4. <em>Satirical reflection</em> on odd marketplace items.
      `,
    },
  ],

  creative: [
    /* Another 20 items, each with a comedic long detail */
    {
      title: `Fake Art Auction #1`,
      detail: `
        <strong>Creative Detailed #1:</strong><br/>
        1. <em>Produce random splatter paintings</em> or scribbles. 
        2. <em>Claim they’re from a “mysterious underground artist.”</em> 
        3. <em>Hold an online auction</em> with fake bids driving up prices. 
        4. <em>Comedic take</em> on suspicious art hype.
      `,
    },
    {
      title: `Pretend Concert Tickets #2`,
      detail: `
        <strong>Creative Detailed #2:</strong><br/>
        1. <em>Announce a “secret show”</em> featuring huge celebrities who know nothing about it. 
        2. <em>Sell limited tickets</em> at premium. 
        3. <em>Cancel day-of</em> claiming “unforeseen technical meltdown.” 
        4. <em>Satirical commentary</em> on scalping & fake events.
      `,
    },
    {
      title: `Fictional Book Club #3`,
      detail: `
        <strong>Creative Detailed #3:</strong><br/>
        1. <em>Offer memberships</em> to an “exclusive literature club.” 
        2. <em>Invent entire novels</em> that don’t exist. Summarize them vaguely. 
        3. <em>Charge monthly fees</em> for the “reading schedule.” 
        4. <em>All comedic exaggeration</em>.
      `,
    },
    {
      title: `Movie Spoiler Hotline #4`,
      detail: `
        <strong>Creative Detailed #4:</strong><br/>
        1. <em>Claim advanced screenings</em> of big upcoming films. 
        2. <em>Sell “exclusive spoiler calls.”</em> 
        3. <em>Provide random made-up plot twists</em>. 
        4. <em>Pure satirical jab</em> at spoiler culture.
      `,
    },
    {
      title: `"Secret Theatrical Experience" #5`,
      detail: `
        <strong>Creative Detailed #5:</strong><br/>
        1. <em>Advertise a labyrinthine interactive theater</em> in a random warehouse. 
        2. <em>Charge high ticket prices</em> for “immersive drama.” 
        3. <em>Offer minimal performance</em>, maybe one actor wandering around. 
        4. <em>All comedic reflection</em> on certain avant-garde experiences.
      `,
    },
    {
      title: `Rent-a-Fake-Fanbase #6`,
      detail: `
        <strong>Creative Detailed #6:</strong><br/>
        1. <em>Hire extras</em> to attend events and pretend to adore a “performer.” 
        2. <em>Sell these fake fan mobs</em> to new artists wanting “buzz.” 
        3. <em>Profit from illusions</em> of popularity. 
        4. <em>Entirely comedic scenario</em>.
      `,
    },
    {
      title: `"Exclusive Book Signing" #7`,
      detail: `
        <strong>Creative Detailed #7:</strong><br/>
        1. <em>Promote a “once-in-a-lifetime signing”</em> for a fictional author. 
        2. <em>Sell tickets</em> and limited VIP passes. 
        3. <em>Provide no real author</em>, only some random volunteer scribbling. 
        4. <em>Comedy angle</em> on hype events.
      `,
    },
    {
      title: `Artisanal Noise Music #8`,
      detail: `
        <strong>Creative Detailed #8:</strong><br/>
        1. <em>Record random clanging and static</em>. 
        2. <em>Label it “artisanal experimental soundscapes.”</em> 
        3. <em>Sell digital albums</em> at steep prices. 
        4. <em>Laugh ironically</em> as a comedic parody of avant-garde music.
      `,
    },
    {
      title: `"Parallel Reality" Workshops #9`,
      detail: `
        <strong>Creative Detailed #9:</strong><br/>
        1. <em>Claim you can guide people</em> into glimpses of alternate universes through “guided daydreaming.” 
        2. <em>Charge workshop fees</em> to experience “dimensional tours.” 
        3. <em>Provide only imaginative scripts</em>. 
        4. <em>Comical reflection</em> on esoteric sessions.
      `,
    },
    {
      title: `"Inflated Nostalgia" Merch #10`,
      detail: `
        <strong>Creative Detailed #10:</strong><br/>
        1. <em>Invent fictional 80s or 90s pop culture brands</em>. 
        2. <em>Sell T-shirts, pins, and “collector’s” items</em> that never really existed. 
        3. <em>Market them as “retro-limited.”</em> 
        4. <em>Satirical commentary</em> on hype around nostalgia.
      `,
    },
    {
      title: `"Fake Autograph" Con #11`,
      detail: `
        <strong>Creative Detailed #11:</strong><br/>
        1. <em>Print photos</em> of random celebrities. 
        2. <em>Forge signatures</em> in convincing marker. 
        3. <em>Sell them as “rare finds.”</em> 
        4. <em>Comedy angle</em> mocking autograph black markets.
      `,
    },
    {
      title: `"Exclusive Script Leaks" #12`,
      detail: `
        <strong>Creative Detailed #12:</strong><br/>
        1. <em>Claim you have inside connections</em> to major upcoming films or TV shows. 
        2. <em>Sell “leaked scripts”</em> that are purely invented. 
        3. <em>Provide sample pages</em> full of nonsense. 
        4. <em>Vanishing comedic act</em>.
      `,
    },
    {
      title: `"Designer Post-It Note" Auction #13`,
      detail: `
        <strong>Creative Detailed #13:</strong><br/>
        1. <em>Draw whimsical doodles</em> on standard sticky notes. 
        2. <em>Call them “hand-crafted mini canvases.”</em> 
        3. <em>Host an online auction</em> with inflated starting bids. 
        4. <em>All comedic reflection</em> on certain art markets.
      `,
    },
    {
      title: `"Impossible Maze" Challenge #14`,
      detail: `
        <strong>Creative Detailed #14:</strong><br/>
        1. <em>Create a labyrinth blueprint</em> that has no real solution. 
        2. <em>Sell tickets</em> to “attempt the unsolvable.” 
        3. <em>Blame user error</em> for their failure. 
        4. <em>Comedic exaggeration</em> of puzzle hype.
      `,
    },
    {
      title: `"Personalized Theme Song" #15`,
      detail: `
        <strong>Creative Detailed #15:</strong><br/>
        1. <em>Offer custom theme songs</em> for individuals. 
        2. <em>Produce extremely generic tunes</em> reusing the same chord progression. 
        3. <em>Charge premium “studio fees.”</em> 
        4. <em>Comedy highlight</em> of ephemeral creative services.
      `,
    },
    {
      title: `"Spontaneous Street Opera" #16`,
      detail: `
        <strong>Creative Detailed #16:</strong><br/>
        1. <em>Recruit random amateurs</em> to sing “opera” on sidewalks. 
        2. <em>Sell tickets in advance</em> to an “immersive city performance.” 
        3. <em>Provide minimal coordination</em>. 
        4. <em>Comedic poke</em> at certain performance art stunts.
      `,
    },
    {
      title: `"DIY Movie Studio" Grants #17`,
      detail: `
        <strong>Creative Detailed #17:</strong><br/>
        1. <em>Claim you fund indie filmmakers</em> for micro-budget features. 
        2. <em>Charge “application fees”</em> to aspiring directors. 
        3. <em>Reject nearly everyone</em> after collecting fees. 
        4. <em>All comedic reflection</em> on questionable grant systems.
      `,
    },
    {
      title: `"Outrageous Talent Agency" #18`,
      detail: `
        <strong>Creative Detailed #18:</strong><br/>
        1. <em>Proclaim representation</em> of bizarre acts (unicycle jugglers, etc.). 
        2. <em>Charge sign-up fees</em> to “performers” for promotional materials. 
        3. <em>Never book them real gigs</em>. 
        4. <em>Satirical commentary</em> on shady talent agencies.
      `,
    },
    {
      title: `"Underground Poetry Rave" #19`,
      detail: `
        <strong>Creative Detailed #19:</strong><br/>
        1. <em>Host “mysterious poetry raves”</em> in empty warehouses. 
        2. <em>Sell pricey tickets</em> promising avant-garde experiences. 
        3. <em>Offer minimal actual content</em> besides random spoken-word. 
        4. <em>Comedic angle</em> mocking underground scene hype.
      `,
    },
    {
      title: `"Luxury Carton Sculptures" #20`,
      detail: `
        <strong>Creative Detailed #20:</strong><br/>
        1. <em>Repurpose cardboard boxes</em> into abstract shapes. 
        2. <em>Claim they are “urban eco-friendly sculptures.”</em> 
        3. <em>Auction them to unsuspecting art enthusiasts</em>. 
        4. <em>Pure comedic fantasy</em>.
      `,
    },
  ],

  weird: [
    /* Another 20 weird items, extra comedic detail */
    {
      title: `Magic Trick Consulting #1`,
      detail: `
        <strong>Weird Detailed #1:</strong><br/>
        1. <em>Claim to reveal “ultimate illusions.”</em> 
        2. <em>Charge eager newbies</em> a premium to learn trivial card tricks. 
        3. <em>Emphasize secrecy</em> while giving out well-known methods. 
        4. <em>All comedic nonsense</em>.
      `,
    },
    {
      title: `Pretend Spy Services #2`,
      detail: `
        <strong>Weird Detailed #2:</strong><br/>
        1. <em>Offer “Bond-level espionage” missions</em> to bored clients. 
        2. <em>Charge them for “stolen intel”</em> that’s just random gossip. 
        3. <em>Stage undercover ops</em> with cheap costumes. 
        4. <em>Comedic reflection</em> of spy fantasies.
      `,
    },
    {
      title: `Alien Ambassador Act #3`,
      detail: `
        <strong>Weird Detailed #3:</strong><br/>
        1. <em>Proclaim you can communicate with aliens</em> from Planet X. 
        2. <em>Sell “exclusive cosmic insights”</em> to gullible fans. 
        3. <em>Host “celestial meetups”</em> where you channel nonsense. 
        4. <em>Pure comedic scenario</em>.
      `,
    },
    {
      title: `Gourmet Air Burgers #4`,
      detail: `
        <strong>Weird Detailed #4:</strong><br/>
        1. <em>Construct invisible “sandwiches”</em> claiming zero-calorie delight. 
        2. <em>Charge gourmet pricing</em>. 
        3. <em>Describe the flavors theatrically</em>. 
        4. <em>All comedic jab</em> at pretentious culinary fads.
      `,
    },
    {
      title: `"Haunted Dumpster" Tours #5`,
      detail: `
        <strong>Weird Detailed #5:</strong><br/>
        1. <em>Identify an old dumpster</em> in a dimly-lit alley. 
        2. <em>Fabricate ghost stories</em> about its cursed contents. 
        3. <em>Offer nighttime tours</em> for thrill-seekers. 
        4. <em>Charge an admission fee</em>, then vanish if city workers arrive.
      `,
    },
    {
      title: `"Parallel Universe Mailbox" #6`,
      detail: `
        <strong>Weird Detailed #6:</strong><br/>
        1. <em>Set up a mailbox</em> in a random field. 
        2. <em>Claim letters inserted</em> are “delivered to a parallel reality.” 
        3. <em>Sell postcards</em> from that “universe.” 
        4. <em>All comedic reflection</em> on bizarre claims.
      `,
    },
    {
      title: `"Dragon Egg" Hunt #7`,
      detail: `
        <strong>Weird Detailed #7:</strong><br/>
        1. <em>Hide elaborately painted rocks</em> in a park or forest. 
        2. <em>Charge participants</em> to join your “fantasy egg hunt.” 
        3. <em>Claim authenticity</em> with elaborate backstories. 
        4. <em>Pure comedic mania</em> about mythical hunts.
      `,
    },
    {
      title: `"Time-Travel Experience" #8`,
      detail: `
        <strong>Weird Detailed #8:</strong><br/>
        1. <em>Decorate a room</em> with old furniture or futuristic props. 
        2. <em>Claim it’s a “temporal bubble.”</em> 
        3. <em>Charge a hefty entry fee</em> to “visit the past/future.” 
        4. <em>All comedic commentary</em> on immersive illusions.
      `,
    },
    {
      title: `"Pet Psychic Hotline" #9`,
      detail: `
        <strong>Weird Detailed #9:</strong><br/>
        1. <em>Advertise an ability</em> to interpret “meows” and “barks.” 
        2. <em>Charge anxious owners</em> for vague pet advice. 
        3. <em>Blame any failures</em> on “pet mood fluctuations.” 
        4. <em>Comedic scenario</em> about spurious new-age services.
      `,
    },
    {
      title: `"Paranormal Ringtone Sales" #10`,
      detail: `
        <strong>Weird Detailed #10:</strong><br/>
        1. <em>Record eerie sounds</em> or moaning. 
        2. <em>Label them “ghostly ringtones.”</em> 
        3. <em>Charge phone users</em> who want “spooky calls.” 
        4. <em>All comedic nonsense</em>.
      `,
    },
    {
      title: `"Shamanic Dating Service" #11`,
      detail: `
        <strong>Weird Detailed #11:</strong><br/>
        1. <em>Claim to spiritually match singles</em> with ancient rituals. 
        2. <em>Charge membership fees</em> for “shamanic compatibility sessions.” 
        3. <em>Provide random partner suggestions</em>. 
        4. <em>Comedic reflection</em> on questionable matchmaking.
      `,
    },
    {
      title: `"Monster-Sighting" Expeditions #12`,
      detail: `
        <strong>Weird Detailed #12:</strong><br/>
        1. <em>Invite thrill-seekers</em> on hunts for mythical creatures. 
        2. <em>Charge expedition fees</em>, point out “footprints.” 
        3. <em>Never find real proof</em>, blame “creature’s cunning.” 
        4. <em>All comedic jab</em> at cryptid tourism.
      `,
    },
    {
      title: `"Zombie Fitness Boot Camp" #13`,
      detail: `
        <strong>Weird Detailed #13:</strong><br/>
        1. <em>Claim participants train</em> to survive a comedic zombie apocalypse. 
        2. <em>Charge sign-up fees</em> for “hardcore zombie drills.” 
        3. <em>Host silly obstacle courses</em> with zombie-themed tasks. 
        4. <em>Pure comedic novelty</em>.
      `,
    },
    {
      title: `"UFO Detector" Rental #14`,
      detail: `
        <strong>Weird Detailed #14:</strong><br/>
        1. <em>Build a blinking device</em> that does nothing. 
        2. <em>Rent it out</em> to UFO enthusiasts who want to “scan skies.” 
        3. <em>Blame false positives</em> on “cosmic interference.” 
        4. <em>Comedic scenario</em> about pseudoscience gear.
      `,
    },
    {
      title: `"Ethereal Scent" Boutique #15`,
      detail: `
        <strong>Weird Detailed #15:</strong><br/>
        1. <em>Sell empty spray bottles</em> labeled “Ethereal Perfume.” 
        2. <em>Claim the fragrance</em> is only perceivable by the highly spiritual. 
        3. <em>Charge big money</em> for the “mystical experience.” 
        4. <em>Comedic reflection</em> on improbable new-age shops.
      `,
    },
    {
      title: `"Levitation Lessons" #16`,
      detail: `
        <strong>Weird Detailed #16:</strong><br/>
        1. <em>Promise to teach people</em> to float a few inches above ground. 
        2. <em>Stage illusions</em> or camera tricks in your demos. 
        3. <em>Charge enrollment fees</em> for “advanced levitation.” 
        4. <em>Pure comedic angle</em> on impossible claims.
      `,
    },
    {
      title: `"Cat Teleconference" #17`,
      detail: `
        <strong>Weird Detailed #17:</strong><br/>
        1. <em>Advertise group video calls</em> where cats “speak to each other.” 
        2. <em>Charge viewers</em> a pay-per-view fee. 
        3. <em>Just show random cat video clips</em>. 
        4. <em>All comedic nonsense</em>.
      `,
    },
    {
      title: `"Haunted Library" Access #18`,
      detail: `
        <strong>Weird Detailed #18:</strong><br/>
        1. <em>Rent a tiny storage unit</em> and fill it with old books. 
        2. <em>Call it a “haunted library.”</em> 
        3. <em>Charge admission</em> for an “eerie reading experience.” 
        4. <em>Comedic reflection</em> on ghost-themed attractions.
      `,
    },
    {
      title: `"Ghost Chef" Restaurant #19`,
      detail: `
        <strong>Weird Detailed #19:</strong><br/>
        1. <em>Open a vacant space</em> with no visible chef. 
        2. <em>Serve invisible dishes</em> claiming they’re “spirit-cooked.” 
        3. <em>Charge for ephemeral experiences</em>. 
        4. <em>Over-the-top comedic angle</em>.
      `,
    },
    {
      title: `"Psychic School Bus" #20`,
      detail: `
        <strong>Weird Detailed #20:</strong><br/>
        1. <em>Buy or rent an old school bus</em>, paint it with cosmic symbols. 
        2. <em>Claim it travels “mind-dimensions”</em> picking up “gifted children.” 
        3. <em>Sell “tickets” to these mystical rides</em>. 
        4. <em>Pure comedic novelty</em> about far-out illusions.
      `,
    },
  ],
};

/***************************************
 *
 *  Show Category Plans (Pop-Up)
 *
 ***************************************/
const categoryPlansModal = document.getElementById("categoryPlansModal");
const categoryPlansContent = document.getElementById("categoryPlansContent");
const closeCategoryModal = document.getElementById("closeCategoryModal");

function openCategoryPlans(category) {
  const catData = strategies[category];
  if (!catData) return;

  // Build the pop-up’s HTML
  let html = `<h2>${
    category.charAt(0).toUpperCase() + category.slice(1)
  } Ventures</h2>`;
  html += `<ul class="plan-list">`;
  catData.forEach((plan, i) => {
    html += `<li class="plan-list-item" data-category="${category}" data-index="${i}">
               ${plan.title}
             </li>`;
  });
  html += `</ul>`;

  categoryPlansContent.innerHTML = html;

  // Show the modal
  categoryPlansModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

closeCategoryModal.addEventListener("click", () => {
  categoryPlansModal.style.display = "none";
  document.body.style.overflow = "auto";
});

/***************************************
 *
 *  Plan Detail Pop-Up
 *
 ***************************************/
const planDetailModal = document.getElementById("planDetailModal");
const planDetailContent = document.getElementById("planDetailContent");
const closePlanModal = document.getElementById("closePlanModal");

// Listen for clicks on any plan item in the category modal
document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("plan-list-item")) {
    const category = e.target.getAttribute("data-category");
    const index = e.target.getAttribute("data-index");
    const plan = strategies[category][index];

    // Hide the category modal
    categoryPlansModal.style.display = "none";

    // Load plan detail into the second modal
    planDetailContent.innerHTML = `<h2>${plan.title}</h2><p>${plan.detail}</p>`;

    // Show the plan details pop-up
    planDetailModal.style.display = "flex";
  }
});

closePlanModal.addEventListener("click", () => {
  planDetailModal.style.display = "none";
  document.body.style.overflow = "auto";
});
