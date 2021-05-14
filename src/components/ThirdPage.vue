<template>
  <div id="third">
    <div class="row align-items-center p-3">
      <div class="col-md-12">
        <h3>Trends of electric and hybrid cars</h3>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <h5>Scatter plots and regression line for green cars</h5>
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
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <img src="../assets/Greencars2y.png" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <!-- <h4>
          Evolution of the number of green cars per 100.000 people every two
          years
        </h4> -->
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
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <!-- <h4>Maps for green cars per year by neiborhood</h4> -->
        <p class="text-start p-3">
          This plot shows the evolution of car ownership by neighborhood in all
          the neigborhoods. The fisrt maps show that there were almost no green
          cars in the early years. Since 2015 we can see a gradual increase of
          green cars in most neighborhoods, specially in the city centre.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/GreenMapDistrict.gif"  class="img-fluid border border-2 border-dark">
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-12">
        <p class="text-start p-3">
          The adoption of Electric and Hybrid cars is still in infancy in the Copenhagen municipality. 
        In 2013 there was a big change in trend of electric cars with a rapid growth in the number 
        of new cars per year. For hybrid cars that change was in 2018. Registrations of green cars 
        are increasing exponentially. This aligns with Denmark's tax changes, rewarding users of electric 
        and hybrid cars and the cultural shift towards sustainability and living an environmentally 
        friendly lifestyle. However the green cars are but they are still a drop in the ocean 
        compared to benzine and diesel cars. The suburb areas have most cars in total: Valby, Vanløse, 
        Brønshøj-Husum while Vesterbro and Østerbro have the least amount of cars. The highest salaries 
        are in the City centre, Osterbro, Amager Vest, Vestebro and Vanløse. most of the green cars are 
        in the City centre, Østerbro and Amager Vest. All of these are high salary districts with only an 
        average amount of cars. This can be explained by the 'Tesla affect', the appearance of luxurious 
        eclectic cars that are fast and elegant and much more expensive than other cars. Recently more 
        affordable hybrid car models have been introduced, following decreased harware and EV battery costs 
        and longer car battery lifetimes. This might lead to a drastic increase in registrations of green 
        cars in all districts. It's hard to predict what the future holds but Denmark is heading in an even 
        stronger direction towards green cars so it's safe to say that the presence of green cars in Copenhagen 
        will continue to increase drastically in the coming years.
        </p>
        
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
  padding-top: 30px;
}
</style>
