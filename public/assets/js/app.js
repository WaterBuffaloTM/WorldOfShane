import { db } from "./firebase.js"
import { collection, getDocs, addDoc,doc,deleteDoc} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

$(document).ready(async function () {
    loadCards()
    $(document.body).on('click', '#openMusicModal', async function(){
        $('#musicModal').modal('show')
    });
    $(document.body).on('click', '#addMusicBtn', async function () {
        const link = $('#musicLink').val()
        const size = $('#musicModalSize').val()
        try {
            const docRef = await addDoc(collection(db, "Music"), {
                Link: link,
                Size: size
            });
            loadCards()
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    });
    $(document.body).on('click', '#removeMusicBtn', async function () {
        const uid = $(this).data('uid')
        removeCard(uid)
    });
});
async function loadCards() {
    //Resets the Rows that will contain the cards
    $(`#insertLinkSmall`).html("")
    $(`#insertLinkMedium`).html("")
    $(`#insertLinkLarge`).html("")
    //Finds all of the links, looks through their data, and uses the information to create the card
    const querySnapshot = await getDocs(collection(db, "Music"));
    querySnapshot.forEach((doc) => {
        const link = doc.data().Link
        let size = doc.data().Size
        if(size === "Small"){
            size = "width: 18rem;"
            const htmlstring = `
            <div class="col-4 mx-auto" >
            <div class="card" style="${size}">
            <div class="card-body">
            ${link}
            </div>
            <div class="col-sm">
                <button type="button" style="float:right;" data-uid=${doc.id} id="removeMusicBtn" class="btn btn-dark">Remove</button>
            </div>
            </div>
            </div>`   
            $(`#insertLinkSmall`).append(htmlstring)
        }else if(size === "Medium"){
            size = "width: 36rem";
            const htmlstring = `
            <div class="col-6 mx-auto" >
            <div class="card" style="${size}">
            <div class="card-body">
            ${link}
            </div>
            <div class="col-sm">
                <button type="button" style="float:right;" data-uid=${doc.id} id="removeMusicBtn" class="btn btn-dark">Remove Music</button>
            </div>
            </div>
            </div>`   
            $(`#insertLinkMedium`).append(htmlstring)
        }else if(size === "Large"){
            size = ""
            const htmlstring = `
            <div class="col-12 mx-auto" >
            <div class="card" style="${size}">
            <div class="card-body">
            ${link}
            </div>
            <div class="col-sm">
                <button type="button" style="float:right;" data-uid=${doc.id} id="removeMusicBtn" class="btn btn-dark">Remove Music</button>
            </div>
            </div>
            </div>`      
            $(`#insertLinkLarge`).append(htmlstring)
        }
    });
}

async function removeCard(uid) {
    await deleteDoc(doc(db, "Music", uid));
    loadCards()
    
}
