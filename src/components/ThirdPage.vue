<template>
  <div id="third">
    <div class="row align-items-center p-3">
      <div class="col-md-12">
        <h3>Green car trends</h3>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <p class="text-start p-3">
          Now that car trends have been analyzed by district and annual salaries
          it is time to focus on electric and hybrid cars, popularly known as
          green cars.
          <br />
          The scatter plots to the right show
          <strong>the total number of green cars per year in Copenhagen</strong
          >.
          <br />
          There is a clear <strong>exponential</strong> growth in both types of
          cars. The number of electric cars has been growing since 2013, whereas
          hybrid cars are growing faster since 2016. Are these trends general in
          Copenhagen or do the numbers vary depending on districts?
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
        <p class="text-start p-3">
          The graph to the left describes the
          <strong>total number of green cars in one year per district</strong>.
          Earlier it was highlighted that there are more cars per person in the
          suburbs, this is Vanløse, Brønshøj-Husum and Valby. However, <strong>there are
          more green cars in the city center</strong>. This could well be because the
          first electric cars were luxurious, fast, elegant and much more
          expensive than other cars and cheaper electric cars have only recently
          been introduced. Another reason could be the higher accessibility of
          charging stations in the city.
        </p>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <p class="text-start p-3">
          The plot to the right shows <strong>the evolution of car ownership by district
          in Copenhagen</strong>. The first maps show that there were almost no green
          cars in the early years. Since 2015 we can see a <strong>gradual increase in
          green cars in most districts</strong>, especially in the city center. The
          amount of green cars is certainly increasing exponentially in all
          areas which is a good sign for the future.
        </p>
      </div>
      <div class="col-md-6">
        <img
          src="../assets/GreenMapDistrict.gif"
          class="img-fluid border border-2 border-dark"
        />
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-12">
        <h4>Conclusions</h4>
        <p class="text-start p-3">
          The adoption of Electric and Hybrid cars is still in infancy in the
          Copenhagen municipality. In 2013 there was a big change in the trend
          of electric cars with rapid growth in the number of new cars per year.
          For hybrid cars that change was in 2018. Registrations of green cars
          are increasing exponentially. This aligns with Denmark's tax changes,
          rewarding users of electric and hybrid cars and the cultural shift
          towards sustainability and living an environmentally friendly
          lifestyle. However, green cars are still a drop in the ocean compared
          to gasoline and diesel cars. The suburb areas have most cars in total:
          Valby, Vanløse, Brønshøj-Husum while Vesterbro and Østerbro have the
          least amount of cars. The highest salaries are in the City center,
          Osterbro, Amager Vest, Vesterbro and Vanløse. Most of the green cars
          are in the City center, Østerbro and Amager Vest. All of these are
          high-salary districts with only an average amount of cars. This can be
          explained by the appearance of luxurious eclectic cars that are fast
          and elegant and much more expensive than other cars. Recently more
          affordable hybrid car models have been introduced, following decreased
          hardware and EV battery costs and longer car battery lifetimes. This
          might lead to a drastic increase in registrations of green cars in all
          districts. It's hard to predict what the future holds but Denmark is
          heading in an even stronger direction towards green cars so it's safe
          to say that the presence of green cars in Copenhagen will continue to
          increase drastically in the coming years.
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
