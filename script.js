
let people = [
    {
        'name':'Mark',
        'lastname':'Webber',
        'profileImg':'img/profile.jpg',
        
    },
    {
        'name':'Jessica',
        'lastname':'Smith',
        'profileImg':'img/profile-2.jpg',
        
    },
    {
        'name':'Jordan',
        'lastname':'Beckham',
        'profileImg':'img/profile-3.jpg',
        
    },
    {
        'name':'Samanta',
        'lastname':'Wang',
        'profileImg':'img/profile-4.jpg',
        
    }
]


const MarkAsRead = document.getElementById('mark-as-read');
        const notification_number = document.querySelector('.notification-number');
        let notificationCount = 1;
        let randomPerson;
        MarkAsRead.addEventListener('click', read);
        var x = setInterval(() => {
            randomPerson = Math.floor(Math.random()*people.length);
        }, 1000);
        
        let notificationArr=[`<div class="profile_container">
                <img src="./${people[0].profileImg}" alt="" width="100%">
            </div>
            <div class="type-of-notification">
                <p><a href="#">${people[0].name+ " " + people[0].lastname}</a> reacted to your recent post <a href="#">My first tournament today!</a></p>
                <p>1m ago</p>
            </div>`,`<div class="profile_container">
                <img src="./${people[1].profileImg}" alt="" width="100%">
            </div>
            <div class="type-of-notification">
                <p><a href="#">${people[1].name + " " + people[1].lastname}</a> followed you</p>
                <p>5m ago</p>
            </div>`,`<div class="profile_container">
                <img src="./${people[2].profileImg}" alt="" width="100%">
            </div>
            <div class="type-of-notification">
                <p><a href="#">${people[2].name + " " + people[2].lastname}</a> has joied you group <a href="#">Chess Club</a></p>
                <p>10 days ago</p>
            </div>
        </div>`,`<div style="display: flex;
    align-items: center;">
                <div class="profile_container">
                    <img src="./${people[3].profileImg}" alt="" width="100%">
                </div>
                <div class="type-of-notification">
                    <p><a href="#">${people[3].name + " " + people[3].lastname}</a> sent you a privat message</p>
                    <p>1 week ago</p>
                </div>
            </div>
            <div class="private-message">
                <p>Feedback is always welcomed.</p>
            </div>`];
            
            setInterval(() => {
                var notifications = document.querySelectorAll('.unread');

                let randomNotification = Math.floor(Math.random() * notificationArr.length)    
                let unReadNotification = document.createElement('div');
                    unReadNotification.className = "notification unread"
                if(randomNotification == 3){
                    unReadNotification.classList.add("flex-column");
                }

                        
                    unReadNotification.innerHTML = notificationArr[randomNotification];
                let notifications_content = document.querySelector('.notifications-content');
                    notifications_content.appendChild(unReadNotification)
                    notification_number.innerHTML = notificationCount++
                MarkAsRead.style.fontWeight = 'bold';
                    
                 

            }, 1500);
        
        function read() {
            var notifications = document.querySelectorAll('.unread');
            for (let i = 0; i < notifications.length; i++) {
                notifications[i].classList.remove('unread');
            }
            notification_number.innerHTML = 0
            notificationCount = 1;
            MarkAsRead.style.fontWeight = 'normal';
        } 