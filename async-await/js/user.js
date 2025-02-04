const displayDiv = document.getElementById('user-profile')


// fetch single user
window.addEventListener('load', async () => {
    let urlParams = new URLSearchParams(window.location.search)
    if (urlParams) {
        let id = urlParams.get('id')

        if (!id) return
        try {
            let result = await fetch("https://dummyjson.com/users/" + id)
            let data = await result.json()

            const { image, firstName, lastName, email, phone, role, bloodGroup, address } = data

            displayDiv.innerHTML = `
                <div class="wrapper">
                    <div class="user-img">
                        <img src="${image}" alt="profile image">
                    </div>
                    <h1 class="user-name">${firstName} ${lastName} <span class="blood-group">(${bloodGroup})</span></h1>

                    <p class="user-address">${address.address}, ${address.city}, ${address.state}, ${address.country}</p>

                    <div class="social-media-icons">
                        <a href="mailto:${email}"><i class="fa-solid fa-envelope"></i></a>

                        <a href="tel:${phone}"><i class="fa-solid fa-headset"></i></a>
                    </div>
                    <p class="role" style="background: ${role == "admin" ? "green" : "black"};">${role}</p>
                </div>

                <a href="index.html" class="go-back-btn">Go Back</a>
            `
        } catch (error) {
            alert(error.messaage)
        }

    }
})