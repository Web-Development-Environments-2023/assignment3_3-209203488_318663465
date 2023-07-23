<template>
    <div id="aboutPage">
    
        <div class="container"
        >

        <img
            class="image"
            src="@/assets/LIORANTAL.jpeg"
            width="500"
            height="300"
            id="icon"
        />

            <h1 class="title">Our Website</h1>
            <p>
                Hi there,
                <br>
                Welcome to our Recipes Website!
                <br>

                Here you can search for recipes, create your own recipe,
                <br>
                 tag a recipe as a "favorite" and enjoy ours family recipes!
            </p>
            <br>
            <h3> We are Lior Kobi & Tal Ben Shimon </h3>
            <br/>
            <br/>

            <h4> If you want you can see here our previous projects: </h4>
            <br/>
            <p>
                1. Building a website for someone in the third generation who close to us,
                <br/>
                so he or she will not feel lonely.
                <br/>
                A link: <a href="https://github.com/Web-Development-Environments-2023/209203488"> Link to assignment 1 - By Tal </a>
                <br/>
                A link: <a href="https://github.com/Web-Development-Environments-2023/318663465"> Link to assignment 1 - By Lior </a>
            <br/>
            <br/>
                2. A Eurovision space war game.
                <br/>
                A link: <a href="https://github.com/Web-Development-Environments-2023/318663465_209203488"> assignment2 </a> <br>
            </p>
        </div>
        <div>
        
        </div>
                
    </div>
</template>

<script>
export default {
  data() {
    return {
        joke: {
            // avatar: 'backgroundperfect.png'
        }
    };
  }
};

</script>
    
<style>
.container {
  max-width: 2200px;
  margin: 50px auto; /* Adjust the margin value */
  padding: 40px;
  background-image: url('../assets/r1.jpg');
  height: 100vh; /* Set the height to 100% of the viewport height */
  background-size: cover; /* Make the background image cover the entire container */
}
.image {
  margin-left: 300px;
}

p {
    font-size: 20px;
}

</style>