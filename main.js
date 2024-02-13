

$("document").ready(() => {

    $(function () {
        $("header").load("components/header.html");
    });

    $(function () {
        $("footer").load("components/footer.html");
    });

    $(".fa-bars").click(function () {
        $("header .right ul").toggleClass("show");
    });

    // create an object for XMLHttpRequest
    var request = new XMLHttpRequest();

    // get the data from xml
    request.open("GET", "info.xml", false);
    request.send();
    var xml = request.responseXML;

    // utilize the obtained data
    $('#objectives').html(xml.getElementsByTagName("Objectives")[0].childNodes[0].nodeValue);
    // ==================================================================================================

    const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'Hibernet', 'Advance Java', 'SQL', 'Git', 'Java', 'PHP', 'Spring', 'Android Development', 'XML', 'jQuery', 'JSON', 'AJAX'];

    // Function to generate a random number between min and max
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate a random skill bubble
    function generateSkill() {
        const skill = skills[getRandomNumber(0, skills.length - 1)];
        const leftPos = getRandomNumber(0, $('#skills').width() - 100);
        const topPos = getRandomNumber(0, $('#skills').height() - 100);
        const $skillBubble = $('<div class="skill">' + skill + '</div>').css({
            left: leftPos,
            top: topPos,
        });
        $('#skills').append($skillBubble);
        const directionX = getRandomNumber(-5, 10); // Random horizontal direction
        const directionY = getRandomNumber(-5, 10); // Random vertical direction
        $skillBubble.animate({
            left: '+=' + (50 * directionX), // Move horizontally
            top: '+=' + (50 * directionY), // Move vertically
            opacity: 0, // Fade out
        }, 5000, 'linear', function () {
            $(this).remove();
        });
    }

    // Generate skill bubbles periodically
    setInterval(generateSkill, 1000);

    // ==================================================================================================
    // Function to load XML data asynchronously
    async function loadXMLDoc(url, callback) {
        await fetch(url)
            .then(response => response.text())
            .then(data => {
                // Parse the XML string into a DOM object
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, "text/xml");
                // Call the callback function with the parsed XML document
                callback(xmlDoc);
            })
            .catch(error => {
                console.error('Error fetching XML:', error);
            });
    }

    // Example usage:
    const xmlURL = 'info.xml';

    // Callback function to handle the loaded XML data
    async function handleXMLData(xmlDoc) {
        // Process the XML data as needed
        // ------------------------------------------------------------------------------
        // Extracting data from XML
        var QName = xmlDoc.getElementsByTagName('QName')
        var Name = xmlDoc.getElementsByTagName('Name')
        var Specialisation = xmlDoc.getElementsByTagName('Specialisation')
        var Institute = xmlDoc.getElementsByTagName('Institute')
        var Affiliation = xmlDoc.getElementsByTagName('Affiliation')
        var InstImage = xmlDoc.getElementsByTagName('InstImage')
        for (let i = 0; i < QName.length; i++) {
            $('#qualification').append(`<div class="card">
                <div class="imgbox">
                    <img src="${InstImage[i].textContent}" />
                    <h2>${QName[i].textContent}</h2>
                </div>
                <div class="content">
                    <h3 class="cl_name">${Name[i].textContent}</h3>
                    <h3 class="q_splc">${Specialisation[i].textContent}</h3>
                    <marquee behavior="" direction="" class="q_inst">${Institute[i].textContent}</marquee>
                    <p class="aff">${Affiliation[i].textContent}</p>
                </div>
            </div>`);
        }

        // ------------------------------------------------------------------------------

        $.ajax({
            type: "GET",
            url: "info.xml", // Assuming the XML file is named projects.xml
            dataType: "xml",
            success: function (xml) {
                // Parse XML and create project cards
                $(xml).find('Project').each(function () {
                    var name = $(this).find('Name').text();
                    var pType = $(this).find('PType Type').toArray().map(node => $(node).text()).join(', ');
                    var pLanguage = $(this).find('PLanguage Language').toArray().map(node => $(node).text()).join(', ');
                    var projectImages = $(this).find('ProjectImage Image').toArray().map(node => $(node).text());
                    var nav = $(this).find('NavURL').text();
                    var projectCard = '<a href="' + nav + '?data=' + name + '" ><div class="card">';
                    projectCard += `<div class="imgbox">
                        <img src="${projectImages[0]}" />
                        <h2>${name}</h2>
                    </div>
                    <div class="content">
                        <p><strong>Project Type:</strong> ${pType}</p>
                        <p><strong>Programming Languages:</strong> ${pLanguage}</p>
                    </div>`;
                    projectCard += '</div></a>';

                    $('#project').append(projectCard);

                    $('.card').click(function () {
                        window.location(nav);
                    });
                });
            },
            error: function () {
                console.log('Error loading XML file');
            }
        });
    }


    // Call the function to load XML asynchronously
    loadXMLDoc(xmlURL, handleXMLData);


    // ==================================================================================================

    $(".filter").each(function () {
        var item = $(this).text();
        // console.log(item);
        $(this).click(()=> {
            $.ajax({
                type: "GET",
                url: "info.xml", // Assuming the XML file is named projects.xml
                dataType: "xml",
                success: function (xml) {
                    // Parse XML and create project cards
                    var projectCard = "";
                    $(xml).find('Project').each(function () {
                        
                        var name = $(this).find('Name').text();
                        var pType = $(this).find('PType Type').toArray().map(node => $(node).text()).join(', ');
                        var pLanguage = $(this).find('PLanguage Language').toArray().map(node => $(node).text()).join(', ');
                        var projectImages = $(this).find('ProjectImage Image').toArray().map(node => $(node).text());
                        var tp = $(this).find('PType Type').toArray().map(node => $(node).text());
                        var nav = $(this).find('NavURL').text();
                        if ($.inArray(item, tp) >=0) {
                            projectCard += '<a href="' + nav + '?data=' + name + '" ><div class="card">';
                            projectCard += `<div class="imgbox">
                                <img src="${projectImages[0]}" />
                                <h2>${name}</h2>
                            </div>
                            <div class="content">
                                <p><strong>Project Type:</strong> ${pType}</p>
                                <p><strong>Programming Languages:</strong> ${pLanguage}</p>
                            </div>`;

                            projectCard += '</div></a>';

                            
                        } else if (item=='All') {
                            projectCard += '<a href="' + nav + '?data=' + name + '" ><div class="card">';
                            projectCard += `<div class="imgbox">
                                <img src="${projectImages[0]}" />
                                <h2>${name}</h2>
                            </div>
                            <div class="content">
                                <p><strong>Project Type:</strong> ${pType}</p>
                                <p><strong>Programming Languages:</strong> ${pLanguage}</p>
                            </div>`;

                            projectCard += '</div></a>';
                        }



                        

                        $('.card').click(function () {
                            window.location(nav);
                        });
                    });
                    $('#project').html(projectCard);


                },
                error: function () {
                    console.log('Error loading XML file');
                }
            });


            
        })
    });

    // ==================================================================================================
});

