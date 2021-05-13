<template>
  <div id="third">
    <div class="row align-items-center">
      <div class="col-md-12">
        <h3>Trends of electric and hybrid cars</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <h4>Scatter plots and regression line for green cars</h4>
        <p class="text-start p-3">
          Now we are going to shift the focus to look at the evolution of
          electric and hybrid cars, popularly known as green cars.
          <br />
          The scatter plots show the total number of cars per year in Copenhagen
          Metropolitan Area for hybrid and electric cars.
          <br />
          The scatter plot shows what it seems an exponential growth in both
          types of car. The number of electric cars have been growing since
          2013, whereas hybrid cars are growing faster since 2016. Lets have a
          look now at the growth of this numbers by neighborhood every two
          years.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/trendgreencars.png" class="img-fluid" />
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="../assets/Greencars2y.png" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h4>
          Evolution of the number of green cars per 100.000 people every two
          years
        </h4>
        <p class="text-start p-3">
          Earlier it was highlighted that there are more cars per person in the
          suburbs, this is Vanløse, Brønshøj-Husum and Valby. However there are
          clearly more green cars in the city center. This could well be because
          of the 'Tesla effect', the appearance of luxurious electric cars that
          are fast and elegant and much more expensive than other cars. Another
          reason could be the higher accessibility of charging stations in the
          city. It is clear that the amount of green cars is increasing
          exponentially in all areas which is a good sign for the future.
        </p>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <h4>Maps for green cars per year by neiborhood</h4>
        <p class="text-start p-3">
          This plot shows the evolution of car ownership by neighborhood in all
          the neigborhoods. The fisrt maps show that there were almost no green
          cars in the early years. Since 2015 we can see a gradual increase of
          green cars in most neighborhoods, specially in the city centre.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/GreenMap.gif" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#third {
  background-color: rgb(235, 230, 226);
  /* background-color: rgb(255, 255, 255); */
  /* height: 700px; */
  width: 100%;
}
</style>
