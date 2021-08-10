const search_string = document.getElementById('Music Search Bar');
songs = {
    'Amelia':`
    Amelia fixes her dress
    straightens her glasses
    eyes lose focus, shoulders down to the floor
    the middle of a crowded room has never felt so lonely
    she forgot what she was dancing for
    why'd I even try tonight
    she thinks every other weekend night
    
    not even dancing keeps me busy anymore
    dancing
    don't keep me busy any more
    not even dancing keeps me busy anymore 
    
    Amelia used to do paintings
    color her dreeams with painted fingertips
    Amelia's art was so close to her heart
    when she broke it she lost her grip
    all of her colors spilled out on the floor
    and her dreams she can't seem to reach them no more
        
    not even dancing keeps me busy anymore 
    dancing don't keep me busy anymore
    not even dancing keeps me busy anymore
        
    And the lows, oh how deep she would go
    to be saved by a standing flower
    old dreams,
    they have power
    
    So Amelia goes to the parties
    Amelias out on the town
    searching for her standing flower
    or old rhythmic lines meant to lay her down
    
    Amelia fixes her dress
    straightens her glasses
    eyes lose focus, shoulders down to the floor
    the middle of a crowded room has never felt so lonely
    she forgot what she was dancing for
    why'd I even try tonight
    she thinks every other weekend night
    
    not even dancing keeps me busy anymore`,
    'What Is Love To You?':`
    How many times do the words wander thoughtless to your lips when you hold her tight or miss her hips 
        miles away or in his grips?
        
        How many times is the love rethought?
        they ask you what but you forgot
        are you scared, could you take it if
        it wasn't quite what they thought?
        
        Could you speak it
        if it was said a lot
        What is love to you?
        And what are hopeless lovers to do?
        But play hapless word games,
        only cry with the rain
        when the whole world has dissed you
        what is love to do?
    `,
    'Living and my Dreams':`The end is where the magic starts
    when you start wandering through the dark
    those broken windows cut your heart
    until you break on through
    
    old broken hearts
    old works of art
    the lines break where the color starts
    until you dream in purple hearts
    and reds and greens and blues
        
    are your eyes locked on up above
    or are you trapped in broken love
    or are you sitting somewhere in between?
        
    living and my dreams
    `,
    'Essence':`Milk and cookies
    after midnight
    touching down in the grass
    nothing's moving too fast
    it's about time
    
    Milk and cookies
    under the stars
    you can run, you can run, you can run
    but it won't get you too far
    
    Milk and cookies
    a brand new day
    it's so high in the sky
    all my demons went out to play
    
    Milk and cookies
    who did you wrong
    oh the worlds been sneaking peeks at you
    and mother nature's humming your song
    
    Milk and cookies
    after midnight
    ain't no star in the sky
    that you can't reach in time
    you'll be alright  
    `,
    'Untitled Two':`He sits in the park out by the bay
    he thinks about the times he used to say
    oh babe, I'll be loving you, a long long time
    
    She cries
    in her one room apartment
    She's late
    few thousand dollars on last month's rent
    She don't know where she's going
    but she's getting there
    
    He thinks
    does she think about me too?
    He dreams
    of all the things he didn't do
    He sleeps
    in a bed made for a queen
    
    She tries
    to pull together all her things
    but her life 
    it seems is bursting at the seams
    she sits
    as it all just goes to shit
    
    they both
    check the distance of the fall
    they think
    about the ones they loved most of all
    his face burned in her memory
    like a falling star from outer space
    
    They step
    into the chilling winter air
    they float
    stop motion
    movies in the air
    he dreams of her
    she dreams of him
    `,
    'Missing Kisses':`Have you been kissing
    those things you've been missing?
    Have you been crying in style?
    
    Wait til tomorrow
    and you'll live in sorrow
    baby it's been quite a while
        
    I'd say I love you
    but there's no time for that
    I can't dwell in the past
    no more
    
    so come on and hit me
    and after
    just kiss me
    break the glass on my revolving door
    
    They all remind me
    I can blame it on the times
    face the peace of mind
    and leave it
    
    but I'd rather wonder
    than hide under covers
    give it a minute
    now that I'm in it
    
    Have you been weighing
    those things you've been saying
    Have you been hurting inside?
    Is there another whose hands dragged you under?
    Or are you just slugging your mind?
    `,
    'Maybe':`Maybe one day we'll both live in Alaska
    where the wild dogs play
    
    Maybe one day we'll both find lovers
    and we will both be ok
    
    Maybe tomorrow I'll die in my bed
    Maybe in time we'll both lose our heads
    
    Maybe our paths will never cross again
    
    
    Maybe one day I'll play music for a living
    and you will come and see me
    
    The words I write will depress millions
    and anger my family
    
    and it all started when we were both stupid kids
    choking on weed and smoking on cigarettes
    
    My time isn't over
    I'm still trying to make the best
    
    Maybe one day you'll finally learn
    all you'd ever want to know in life
    
    You could explain the theory of relativity to me
    and play with your dogs at night
        
    Will you still lay with your eyes open wide
    searching for something to quiet your mind
    
    look for a light out your window
    let me come inside
    `,
    'Untitled One':`Late at night I wonder how exactly it'll end
    All the faces and the people I will never see again
    They say think about the good times
    They say good times just don't last
    They'll be living in your memories
    But memories fade fast
        
    And it's hard to accept that there's no exception
    It's weird to think that nothing else will last
    
    Because one day all you'll be is a happy memory
    And it's sad to me that memories fade fast
    
    Late at night I smile
    and I think about my friends
    all the people that I didn't like
    and the ones that I never met
    
    and it's hard for me to imagine
    that our complicated lives
    all the words and information
    passing through unconcious minds
    
    And it's hard to accept that there's no exceptions
    It's weird to think that nothing else will last
        
    Because one day all you'll be is a happy memory
    And it's sad to me that memories fade fast
    `,
    'The Kiss':`From my window I see something special
    across the expanse of the road
    a woman sits holding her head in her hands
    a lady sits crying alone
    
    all my life I've been told to go help her
    but this beauty would want nothing less
    her life has been taken by these hands that mistaken
    her as a barbie to ken
    
    but beauties don't wait for a savior
    and her beautify it defied the odds
    taking life by the boot she's a pistol that shoots
    and she's pointed at prince charming's heart
    
    her beauty is viciously pretty
    she's the best that a person can be
    
    and the woman that knows she's a woman I know
    will always be the woman for me
    `,
    'One-Eyed Space Babe':`
    My heart breaks
        over San Francisco
        
        My love fakes
        that she's gotta go
        
        She's got a hot date
        down in the meadow
        
        She's going somewhere
        a place that I can't go
        
        My space-aged lady leaves her mark upon the stars
        When I look into her eye
        know that something isn't right
        
        I never realized
        We'll never see eye to eyes
        and floating up into the void
        My baby tells the universe to stop
        
        There's nothing more I want
        Who knew it possible
        That time would stop and love would grow
        The Earth spins fast and we'll take it slow
        
        The Milky Way is closed today
        So float with me
        A million miles away we'll see
        that nothing really matters
        
        A person's touch is just as much
        As stars collide what's real life to you
        
        My heart breaks
        floating over Juno
        
        My love takes
        her last look for a while
        
        She's got a hot date
        Down in the meadow
        She's going somewhere
        a place only she knows
        
        Cold rocks engulf the sky
        as stardust twinkles lullabies
        my memories have taken me
        but I can't make her stay
        
        Time walks lonely moving on
        for those whose love isn't as strong
        the universe implores you
        
        a person's touch is just as much
        as stars collide
        what's real life to you
    `,
    'In The Lecture Hall':`
    Look at her up on the stage
        do lights and colors call her name
        oh she's an academic girl
        in an academic world
        and she don't even know my name
        I'm noting every word she says
        
        Oh like a candle in the dark
        Her lectures tearing me apart
        Classes pass like summer days
        I'll study I can't look away
        Lay in bed I'll dream all day
        that I'll be by her side
        I swore I wouldn't hoe like this
        I thought I could test out of it
        Teacher please come tutor me tonight
        
        Look at her upon the stage
        Vibrant colors call my name
        Oh she's an academic fox
        No way I'm staring at the clock
        And she don't even know my name
        I'm nothing every word she says
        Oh like a candle in the dark
        Her lectures tearing me apart
        
        and classes pass like summer days
        I can't hear a word you say
        sing to me girl, I'll make you play
        Or will you be teaching me again
        Between homework and my study time
        I've got just enough to make you mine
        Teacher please come tutor me tonight
    `,
    'Over':
    `
    It's a trip moving on
    at first the days move slowly
    and the nights are nothing to look forward to
    as you move along feels like your losing something
    but there's nothing you can do
    
    It's hard to say when it'll go away
    but it's better to have loved and to have lost
    
    but it's over now
    I'm moving on
    
    It's sad to see what we couldn't be
    at least everybody tells me that it's true
    I guess you see something wrong with me
    Does it help that I can't say the same for you
    
    It hurts to say but it'll go away
    Cause I'd rather be nothing if everything won't do
    
    but it's over now
    I'm over you
    `,
    'Brainstorming':`I feel it storming in your head
    Clouds lying in your mind and raining out your eyes
    The thunder booms while you're in bed
    cause there's nothing to distract from all
    the thoughts that should retract into your brain
    
    You hear what you were saying
    The moves that you were making now they all look wrong
    but your point of view is flawed
    and you're better off moving on
    
    I feel it storming in your head
    all the simple people living there they run and hide again
    it must get tiring to know
    all the stupid things and silly flings you've had so long ago
    
    the thunder booms when you're in bed
    how can you stand this pointless pain it must just rip apart your brain
    you can't just
    focus on the facts
    nobody cares how you act
    
    and when you feel you can't go on
    all the little strings remembering things are pulling much too strong
    it only matters much to you
    I'd say similar things to those who bring themselves above the view of
    
    those selfish people living out
    their own selfish lives with their selfish wives
    who couldn't care less about
    how his day went, and the stupid thing that you've done
    
    I feel it storming in your head
    Clouds lying in your mind and raining out your eyes
    The thunder booms while you're in bed
    cause there's nothing to distract from all
    the thoughts that should retract into your brain
    
    You hear what you were saying
    The moves that you were making now they all look wrong
    but your point of view is flawed
    and you're better off moving on
    `,
    'Living In My Dreams':`Wasting your days away, hiding from the words I say
    Remember things aren't always as they seem
    
    Though I cannot fail to recognize the sadness hid behind your eyes
    take a closer look and you can see
    
    through the lense a light it shines
    and though I can't travel back in time
    I know one day you'll be waiting for me
    
    And through the dark I'll run to you
    Don't matter where we're going to 
    Cause I know we'll be living
    in my dream
    
    But as the days turn into nights
    I lovingly hold no one tight
    and stroke her hair until she falls asleep
    
    The one I wished inside my arms
    She turned away but meant no harm
    If you love someone then set her free
    
    A different face, a different time
    her memories won't scar my mind
    cause maybe you just weren't the one for me
    
    but until I find A Heart Like Hers
    Another One to live in my world
    My lover will be living in my dreams
    `,
    "Let's Talk About It":`
    
    `
}

