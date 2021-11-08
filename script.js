
// card`s components
let card = document.querySelector('.card');
let cardContacts = document.querySelector('#cardContacts');
let cardInfo = document.querySelector('#cardInfo');
let cardBackground = document.querySelector('#cardBackground');
let cardAvatar = document.querySelector('#cardAvatar');
let cardNickName = document.querySelector('#cardNickName');
let cardNickNameInner = document.querySelector('#cardNickNameInner');
let cardOccupation = document.querySelector('#cardOccupation');
let cardOccupationInner = document.querySelector('#cardOccupationInner');
let cardOccupationTitle = document.querySelector('#cardOccupationTitle');
const cardInner = document.querySelector('.card_info')
// let cardLevel = document.querySelector('#cardLevel');
// let cardLevelTitle = document.querySelector('#cardLevelTitle');
// let cardStatus = document.querySelector('#cardStatus');
// let cardStatusTitle = document.querySelector('#cardStatusTitle');
// let cardStatusIcon = document.querySelector('#cardStatusIcon');
let cardResume = document.querySelector('#cardResume');

// general content`s components
let content = document.querySelector('#content');
let menuButtons = document.querySelectorAll('.tab_link');
let tabContent = document.querySelectorAll('.tab_content');

// skill`s tab components
let skills = document.querySelectorAll('.skill');
let skillImages = document.querySelectorAll('.skill_img_inner');
let skillTitles = document.querySelectorAll('.skill_img_title');
// let chartCircles = document.querySelectorAll('.chart_circle');
const chartBar = document.querySelectorAll('.barChart_inner');
let chartPercentages = document.querySelectorAll('.skill_chart_percentage');
let skillDescriptions = document.querySelectorAll('.skill_description_inner');
let percentage = [80, 75, 70, 60, 65, 50, 55, 65, 40, 25, 60, 20, 45, 35, 90];


// project`s tab components
let projects = document.querySelectorAll('.project');
// let projectsNames = document.querySelectorAll('.project_header_inner');
let projectsImges = document.querySelectorAll('.project_img_inner');
let projectSlider = document.querySelectorAll('.project_slider');
let projectSliderImg = document.querySelectorAll('.project_slider img');
let projectDescriptionOuters = document.querySelectorAll('.project_description_outer');
let projectDescriptionInner = document.querySelectorAll('.project_description');
let projectDescriptionTitle = document.querySelectorAll('.project_description_inner');
let projectTechnologyOuter = document.querySelectorAll('.project_technologies');
let projectTechnologyTitle = document.querySelectorAll('.project_technologies_inner');
let projectButtons = document.querySelectorAll('.project_buttons');
// let trainingButton = document.querySelector('#training');
// let commercialButton = document.querySelector('#commercial');
// let commercialProjects = document.querySelector('.commercial');
let trainingProjects = document.querySelector('.project_cards');




// about`s tab components
let personalInfo = document.querySelectorAll('.personal_inner');
let personalTitle = document.querySelectorAll('.personal_title');
let personalIcon = document.querySelectorAll('.personal_title i');
let personalContent = document.querySelectorAll('.personal_content');

let languageLevel = [90, 60];
let langugeAnimate = ['language_animate1', 'language_animate2']

let language = document.querySelectorAll('.language');
let languageHeader = document.querySelectorAll('.language_header');
let languageLevelTitle = document.querySelectorAll('.language_level_title');
let languageLevelBar = document.querySelectorAll('.language_level_inner');
let languageLevelBarOuter = document.querySelectorAll('.language_level_outer');
let languagePercentage = document.querySelectorAll('.language_percentage');


// control panel components
let controlPanel = document.querySelector('.control');
let closeButton = document.querySelector('#close');
let upButton = document.querySelector('#up');
let downButton = document.querySelector('#down');




// function to faster the animation (for comfortabel programming)
function showMain() {
    content.style.filter = "blur(0)";
    content.style.margin = 0;
    card.style.display = 'none';
    showHideTab(menuButtons[1], 1);
}




// START of everything
document.addEventListener('DOMContentLoaded', function () {
    showCard()
    // switch off card animation for refactoring / debugging body part
    // showMain()
})


// PERSONAL CARD animation
function showCard() {
    setTimeout(() => {
        cardInfo.classList.remove('invisible');
        cardInfo.style.height = cardInfo.scrollHeight + 'px';
        showCardAvatar();
    }, 1500);
}

function showCardAvatar() {
    cardBackground.classList.remove('invisible');
    cardBackground.style.height = cardBackground.scrollHeight + 'px';
    setTimeout(() => {
        cardAvatar.classList.add('avatar_animation');
        showCardObjects();
    }, 1500);
}

function showCardObjects() {
    setTimeout(() => {
        setTimeout(() => {
            cardNickName.classList.remove('invisible'); showCardNickName();
        }, 1500)

        // cardLevel.classList.remove('invisible');
        // cardStatus.classList.remove('invisible');

        cardInfo.style.height = cardInfo.scrollHeight + 'px';



    }, 5000);
}

function showCardNickName() {
    // cardNickNameInner.classList.add('nickname_animation');
    gsap.to("#cardNickNameInner", {
        duration: 2,
        delay: 1,
        text: 'Yaroslav'
    })
    gsap.to("#cardNickNameInner", {
        duration: 1,
        delay: 3,
        text: ''
    })
    gsap.to("#cardNickNameInner", {
        duration: 2,
        delay: 4,
        text: 'Yarex'
    })
    setTimeout(() => {
        cardOccupation.classList.remove('invisible');
        cardOccupationInner.classList.remove('invisible');
        setTimeout(() => { showCardOccupation() }, 1500)
    }, 5000)
}

function showCardOccupation() {


    setTimeout(() => {
        cardOccupationInner.style.width = 100 + "%";
        cardOccupationTitle.classList.add('occupation_animation');
    }, 1000)
    setTimeout(() => { showCardMenu() }, 1500)

    cardInner.style.padding = '3vh 0 0vh'
    cardInfo.style.height = cardInfo.scrollHeight + 'px';
    setTimeout(() => {
        cardOccupationTitle.style.border = 'none'
    }, 13000);
}

// function showCardLevel() {
//     setTimeout(() => {
//         cardLevelTitle.classList.add('level_animation');
//         showCardStatus();
//     }, 3000);
// }

// function showCardStatus() {
//     setTimeout(() => {

//         cardStatus.style.width = 90 + '%';
//         cardStatusTitle.classList.add('status_animation');
//         cardStatusIcon.classList.add('icon_animation');
//         showCardMenu();
//     }, 1000);
// }

function showCardMenu() {
    setTimeout(() => {
        cardContacts.style.height = cardContacts.scrollHeight + 'px';
        cardContacts.classList.remove('invisible');
        showCardResume();
    }, 2000);
}

function showCardResume() {

    setTimeout(() => {
        cardResume.style.height = cardResume.scrollHeight + 'px';
        cardResume.classList.remove('invisible');


        if (document.documentElement.clientWidth >= 1150) {
            moveCardToLeft();

        } else {
            content.style.filter = 'blur(0)';

        }


    }, 2000);

}



// to move personal card to the left
function moveCardToLeft() {
    setTimeout(() => {
        card.style.left = 1 + '%';
        moveContent();
    }, 2000);
}




// GENERAL TABS animation
for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener('click', function (e) {
        e.preventDefault();
        showHideTab(this, i);
    })
}

// to move main content`s tabs to the rights
function moveContent() {
    setTimeout(() => {
        content.style.margin = '5vh 1vw 0 37vw';
        content.style.filter = 'blur(0)';
        setTimeout(() => {
            showHideTab(menuButtons[0], 0);
        }, 2000)
    }, 500)
}

// move content and open control panel if a tab is openned
function moveCheckedTabs() {
    if (checkTabs()) {
        if (document.documentElement.clientWidth >= 1150) {
            content.style.margin = '5vh 6vw 0 37vw';
        } else {
            content.classList.add('active');
        }
        controlPanel.classList.add('active')
    } else {
        if (document.documentElement.clientWidth >= 1150) {
            content.style.margin = '5vh 1vw 0 37vw';
        } else {
            content.classList.remove('active');
        }
        controlPanel.classList.remove('active');
    }
}

function showHideTab(link, num) {
    link.classList.add('disabled')
    link.classList.toggle('select');
    if (link.classList.contains('select')) {
        moveCheckedTabs()
        link.nextElementSibling.style.height = link.nextElementSibling.scrollHeight + 'px';
        addTabAnimation(link, num)
    } else {

        deleteTabAnimation(link, num)
        moveCheckedTabs()
    }

}

function addTabAnimation(link, num) {
    setTimeout(() => {
        link.nextElementSibling.style.height = link.nextElementSibling.scrollHeight + 'px';

        switch (num) {
            case 0:
                window.addEventListener('scroll', tab1);
                tab1();
                break;
            case 1:
                window.addEventListener('scroll', tab2);
                tab2();
                break;
            case 2:
                window.addEventListener('scroll', tab3);
                tab3();
                break;
        }
        link.classList.remove('disabled')
    }, 1500);
}

function deleteTabAnimation(link, num) {
    link.nextElementSibling.style.height = 0;
    switch (num) {
        case 0:
            window.removeEventListener('scroll', tab1);
            setTimeout(() => {
                // tab1Close();
            }, 1500)
            break;
        case 1:
            window.removeEventListener('scroll', tab2);

            tab2Close();

            break;
        case 2:
            window.removeEventListener('scroll', tab3);

            tab3Close();

            break;
    }
}

// check if at least 1 tab is open (for control panel to show)
function checkTabs() {
    let check = Array.from(menuButtons).some(elem => elem.classList.contains('select'));
    console.log('check');
    return check;
}

// check the visibily of the objects (for animation)
function isPartiallyVisible(elem) {
    let elementBoundary = elem.getBoundingClientRect();
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

// to check if the target tab is opened (for animation)
function checkOpenLink(object) {
    return object.parentElement.parentElement.previousElementSibling.classList.contains('select');
}



// SKILLS tab animation
function tab1() {
    for (let i = 0; i < skills.length; i++) {
        if (checkOpenLink(skills[0])) {
            if (isPartiallyVisible(skills[i])) {
                showSkillImg(i);
                // showImgSkillTitle(i);
                if (parseInt(chartPercentages[i].innerHTML) == 0) {
                    showSkillChartPercentage(i);
                }
                showSkillDescription(i)
                gsap.to('.offer_text',{
                    duration: 7,

                    text: {
                        value: "Highly motivated front-end developer able to build responsible user-friendly websites and web apps using mobile-first approach. Eager to become a full-stack developer.",
                        delimiter: ''
                    },
                    delay: 0.5
                })
                gsap.to('.offer_title',{
                    text: 'why me?',
                    duration: 3,
                    delay: 1
                })
                

            }
        } else {
            // tab1Close();
        }
    }
}

function showSkillImg(num) {
    if (checkOpenLink(skills[0])) {
        skillImages[num].classList.add('skill_img_animation');
    } else {
        // tab1Close();
    }
}

function showImgSkillTitle(num) {
    if (checkOpenLink(skills[0])) {
        skillTitles[num].classList.add('skill_img_title_animation');
    } else {
        // tab1Close();
    }
}

function showSkillChartPercentage(num) {
    if (checkOpenLink(skills[0])) {
        if (parseInt(chartPercentages[num].innerHTML) < percentage[num]) {
            chartPercentages[num].innerHTML = parseInt(chartPercentages[num].innerHTML) + 1 + '%';
            let counter = parseInt(chartPercentages[num].innerHTML);
            // let dashArray = Math.floor((150 * counter) / 100);
            // chartCircles[num].setAttribute('stroke-dasharray', `${dashArray}, 150`);
            if(chartBar[num]){
                chartBar[num].style.width = counter + '%'
            }
            
            setTimeout(() => {
                showSkillChartPercentage(num)
            }, 50)
        }
    } else {
        // tab1Close();
    }

}

function showSkillDescription(num) {
    if (checkOpenLink(skills[0])) {
        skillDescriptions[num].style.width = 100 + '%';
        skillDescriptions[num].classList.add('skill_description_inner_animation');
    } else {
        // tab1Close();
    }
}

// close SKILLS tab
function tab1Close() {
    // Array.from(skillImages).forEach(elem => elem.classList.remove('skill_img_animation'));
    // Array.from(skillTitles).forEach(elem => elem.classList.remove('skill_img_title_animation'));
    // Array.from(chartCircles).forEach(elem => elem.setAttribute('stroke-dasharray', '0, 150'));
    // Array.from(chartPercentages).forEach(elem => elem.innerHTML = 0);
    // Array.from(skillDescriptions).forEach(elem => elem.classList.remove('skill_description_inner_animation'));
}



// PROJECT tab animation

function tab2() {
    for (let i = 0; i < projects.length; i++) {
        if (isPartiallyVisible(projects[i])) {
            showProjectCard(i);
        }
    }
}

function showProjectCard(num) {
    if (checkOpenLink(projects[0])) {
        projects[num].classList.add('project_animation');
        showProjectName(num);
    } else {
        tab2Close();
    }
}

function showProjectName(num) {
    if (checkOpenLink(projects[0])) {
        setTimeout(() => {
            // projectsNames[num].classList.add('project_header_animation');
            showProjectImg(num);
        }, 1000)
    } else {
        tab2Close();
    }
}



function showProjectImg(num) {
    if (checkOpenLink(projects[0])) {
        setTimeout(() => {
            if (!projectsImges[num].classList.contains('project_img_animation') && checkOpenLink(projects[0])) {
                projectsImges[num].classList.add('project_img_animation');

            }
            showProjectDescription(num);
        }, 1100);
    } else {
        tab2Close();
    }
}



function projectSlideShow(images, wall) {


}


function showProjectDescription(num) {
    if (checkOpenLink(projects[0])) {
        setTimeout(() => {
            projectDescriptionOuters[num].style.opacity = 1;
            projectDescriptionInner[num].style.width = 100 + "%";
            projectDescriptionTitle[num].classList.add('project_description_animation');
            setTimeout(() => {
                projectDescriptionTitle[num].style.borderRight = 0;
            }, 2000)
            showProjectTechnologies(num);
        }, 1000)
    } else {
        tab2Close();
    }
}

function showProjectTechnologies(num) {
    if (checkOpenLink(projects[0])) {
        setTimeout(() => {
            projectTechnologyOuter[num].style.width = 100 + "%";
            //    projectTechnologyTitle[num].classList.add('project_technologies_animation');
            gsap.to( projectTechnologyTitle[num],{
                width: 100 + '%',
                delay: 3,
                duration: 1,
            }) 
            
        
            showProjectButtons(num)
        }, 1000)
    } else {
        tab2Close();
    }
}

function showProjectButtons(num) {
    if (checkOpenLink(projects[0])) {
        setTimeout(() => {
            Array.from(projectButtons[num].children).forEach(elem => elem.classList.add('project_button_animation'));

        }, 1000);
    } else {
        tab2Close();
    }
}

// animation for switching types of projects
// trainingButton.addEventListener('click', function () {

//     commercialButton.checked = false;
//     commercialProjects.style.display = 'none';
//     trainingButton.disabled = true;
//     commercialButton.disabled = false;
//     menuButtons[1].classList.toggle('select')



//     deleteTabAnimation(menuButtons[1], 1);
//     setTimeout(() => {

//         tabContent[1].style.height = tabContent[1].scrollHeight + 'px';
//         trainingProjects.style.display = 'flex';
//         tabContent[1].style.height = tabContent[1].scrollHeight + 'px';
//         menuButtons[1].classList.toggle('select')
//         addTabAnimation(menuButtons[1], 1);

//     }, 3000)

// });

// commercialButton.addEventListener('click', switchToCommercial)

// function switchToCommercial() {

//     trainingButton.checked = false;
//     trainingProjects.style.display = 'none';
//     commercialButton.disabled = true;
//     trainingButton.disabled = false;
//     menuButtons[1].classList.toggle('select');




//     deleteTabAnimation(menuButtons[1], 1);
//     setTimeout(() => {

//         tabContent[1].style.height = tabContent[1].scrollHeight + 'px';
//         commercialProjects.style.display = 'flex';
//         tabContent[1].style.height = tabContent[1].scrollHeight + 'px';
//         menuButtons[1].classList.toggle('select');
//         addTabAnimation(menuButtons[1], 1);


//     }, 3000)

// }



// close PROJECT tab
function tab2Close() {

    // Array.from(projectsImges).forEach(elem => elem.classList.remove('project_img_animation'));




    // Array.from(projectButtons).forEach(elem => {
    //     Array.from(elem.children).forEach(el => el.classList.remove('project_button_animation'));
    // });
    // Array.from(projectTechnologyTitle).forEach(elem => elem.classList.remove('project_technologies_animation'));
    // Array.from(projectTechnologyOuter).forEach(elem => elem.style.width = 1 + '%');
    // Array.from(projectDescriptionTitle).forEach(elem => elem.style.borderRight = '2px solid rgba(255, 255, 255, 0.822)');
    // Array.from(projectDescriptionTitle).forEach(elem => elem.classList.remove('project_description_animation'));
    // Array.from(projectDescriptionInner).forEach(elem => elem.style.width = 0);
    // Array.from(projectDescriptionOuters).forEach(elem => elem.style.opacity = 0);

    // // Array.from(projectsNames).forEach(elem => elem.classList.remove('project_header_animation'));
    // Array.from(projects).forEach(elem => elem.classList.remove('project_animation'));
    // arrCountTab2 = [];

}



// ABOUT tab animation


function tab3() {
    for (let i = 0; i < personalInfo.length; i++) {
        if (checkOpenLink(personalInfo[i])) {
            if (isPartiallyVisible(personalInfo[i])) {
                setTimeout(() => { showPersonalIcon(i) }, i * 5000)
            }
        } else {
            tab3Close();
        }
    }

    for (let j = 0; j < language.length; j++) {
        if (checkOpenLink(personalInfo[0])) {
            if (isPartiallyVisible(language[j])) {
                setTimeout(() => {
                    showLanguageTitle(j);
                }, j * 1500)

            }
        } else {
            tab3Close();
        }
    }
}



function showPersonalIcon(num) {
    if (checkOpenLink(personalInfo[0])) {
        setTimeout(() => {
            personalIcon[num].classList.add('personal_title_i_animation');
            showPersonalTitle(num);

        }, 1000);
    } else {
        tab3Close();
    }
}

function showPersonalTitle(num) {
    if (checkOpenLink(personalInfo[0])) {
        setTimeout(() => {
            if (!personalTitle[num].classList.contains('personal_title_animation')) {
                personalTitle[num].children[1].setAttribute('style', 'borderRight = 2px solid rgba(139, 127, 127, 0.589)');
            }
            personalTitle[num].classList.add('personal_title_animation');
            showPersonalContent(num);
            setTimeout(() => {
                personalTitle[num].children[1].style.borderRight = 0;
            }, 1500)

        }, 1500);
    } else {
        tab3Close();
    }
}


function showPersonalContent(num) {

    if (checkOpenLink(personalInfo[0])) {


        setTimeout(() => {
            if (!personalContent[num].classList.contains('personal_content_animation')) {
                personalContent[num].children[0].setAttribute('style', 'borderRight = 2px solid rgba(139, 127, 127, 0.589)');
            }
            personalContent[num].classList.add('personal_content_animation');
            setTimeout(() => {
                personalContent[num].children[0].style.borderRight = 0;
            }, 1500)
        }, 1500)
    } else {
        tab3Close();
    }
}


function showLanguageLevel(num) {
    if (checkOpenLink(personalInfo[0])) {
        if (parseInt(languagePercentage[num].innerHTML) < languageLevel[num]) {
            languagePercentage[num].innerHTML = parseInt(languagePercentage[num].innerHTML) + 1 + '%';
            languageLevelBar[num].style.width = parseInt(languagePercentage[num].innerHTML) + '%';
            setTimeout(() => {
                showLanguageLevel(num);
            }, 50)
        }
    } else {
        tab3Close();
    }
}

function showLanguageTitle(num) {
    let animation = langugeAnimate[num];
    if (checkOpenLink(personalInfo[0])) {
        setTimeout(() => {
            languageHeader[num].classList.add(`${animation}`);
            tabContent[2].style.height = tabContent[2].scrollHeight + 'px';
            showLanguageLevelTitle(num);
            setTimeout(() => {
                languageHeader[num].classList.add('language_animate_border')
            }, 7500)
        }, 1000);
    } else {
        tab3Close();
    }
}

function showLanguageLevelTitle(num) {
    if (checkOpenLink(personalInfo[0])) {
        tabContent[2].style.height = tabContent[2].scrollHeight + 'px';
        languageLevelTitle[num].classList.add('language_level_title_animation');
        showLanguageLevelOuter(num);
    } else {
        tab3Close();
    }
}



function showLanguageLevelOuter(num) {
    // if (checkOpenLink(personalInfo[0])) {
        languageLevelBarOuter[num].style.width = 100 + '%';
        setTimeout(() => {
            if (parseInt(languagePercentage[num].innerHTML) == 0) {
                showLanguageLevel(num);
            }
        }, 1500)
    // } else {
    //     tab3Close();
    // }
}

function tab3Close() {
    // Array.from(personalIcon).forEach(elem => elem.classList.remove('personal_title_i_animation'));
    // Array.from(personalTitle).forEach(elem => elem.classList.remove('personal_title_animation'));
    // Array.from(personalContent).forEach(elem => elem.classList.remove('personal_content_animation'));
    // Array.from(languagePercentage).forEach(elem => elem.innerHTML = 0 + '%');
    // Array.from(languageLevelBar).forEach(elem => elem.style.width = 0);
    // Array.from(languageLevelBarOuter).forEach(elem => elem.style.width = 0);
    // Array.from(languageHeader).forEach(elem => elem.className = 'language_header');
    // Array.from(languageLevelTitle).forEach(elem => elem.classList.remove('language_level_title_animation'));
    tabContent[2].style.height = 0;
}

let languageList = ['Russian', 'English'];
if (document.documentElement.clientWidth <= 1150) {
    for (let i = 0; i < languageHeader.length; i++) {
        languageHeader[i].innerHTML = languageList[i];
    }
}


// CONTROL PANEL animation


// close all tabs
closeButton.addEventListener('click', closeAll);

function closeAll() {
    Array.from(menuButtons).forEach(elem => { elem.classList.remove('select') });
    deleteTabAnimation(menuButtons[0], 0);
    deleteTabAnimation(menuButtons[1], 1);
    deleteTabAnimation(menuButtons[2], 2);
    if (document.documentElement.clientWidth >= 1150) {
        content.style.margin = '5vh 1vw 0 37vw';
    } else {
        content.classList.remove('active');
    }
    controlPanel.classList.remove('active');
}


// move up and down
upButton.addEventListener('click', moveUp);
downButton.addEventListener('click', moveDown);

function moveUp() {
    window.scroll({
        left: 0,
        top: document.body.offsetTop,
        behavior: 'smooth'
    })
}

function moveDown() {
    window.scroll({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
}