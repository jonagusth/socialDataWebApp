<template>
  <div id="first">
    <div class="row align-items-center p-3">
      <div class="col-md-12">
        <h3>Car ownership over time for Copenhagen Metropolitan Area</h3>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <p class="text-start p-3">
          This website is developed for the course 02806 Social Data Analysis
          and Visualization at Danmarks Tekniske Universitet. The project
          describes car ownership for the Copenhagen metropolitan area in the
          period of time between 2006 and 2020. The data used is loaded from
          <a href="https://kk.statistikbank.dk/statbank5a/default.asp?w=1536"
            >København Statistikbank</a
          >
          and <a href="https://www.opendata.dk/">Open Data DK</a>
          . The raw data includes tables on new private cars registered every
          year in every district in Copenhagen. The data was plotted using
          different visualization tools that include barplots, scatterplots and
          maps. The data and jupyter notebook used to perform these
          visualizations can be found
          <a href="https://github.com/jonagusth/SoicalDataAssets">here</a> The
          goal is to analyze and look for trends and singularities. The
          visualization focuses on:
        </p>
      </div>
      <div class="col-md-6">
        <ul class="list-group-flush p-3">
          <li
            class="list-group-item"
            style="background-color: rgb(235, 230, 226); !important"
          >
            Car ownership by type over time
          </li>
          <li
            class="list-group-item"
            style="background-color: rgb(235, 230, 226); !important"
          >
            Car ownership by type and district
          </li>
          <li
            class="list-group-item"
            style="background-color: rgb(235, 230, 226); !important"
          >
            Car ownership by district and annual saleries
          </li>
          <li
            class="list-group-item"
            style="background-color: rgb(235, 230, 226); !important"
          >
            Trends of electric and hybrid cars, popularly knows as
            <strong>green cars</strong>
          </li>
          <li
            class="list-group-item"
            style="background-color: rgb(235, 230, 226); !important"
          >
            The future of car ownership in Copenhagen
          </li>
        </ul>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <img src="../assets/CopenBar.png" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h4>Car registration in Copenhagen between 2006 - 2020</h4>
        <p class="text-start p-3">
          The topic of sustainability and living an environmentally friendly
          lifestyle is constantly growing. Denmark is one of the frontrunners in
          implementing the United Nations Sustainable development goals and
          Copenhagen is a hub for innovation and the development of sustainable
          solutions. In recent years there has been a shift in car ownership.
          People are more and more switching from gasoline and diesel cars to
          more sustainable electric and hybrid cars. First, let's look at how
          car ownership in Copenhagen has been developing.
          <br /><br />
          The graph to the left, visualizing
          <strong>car registratopns in Copenhagen</strong>, shows thah the
          amount of registered cars has been growing since 2006. There are some
          years where the growth slows down, for instance, 2009 and 2010. That
          is most likely due to the world economic crisis. After 2013 the number
          of cars increases constantly. Is it because people living in
          Copenhagen are buying more cars than before or is there another
          explanation?
        </p>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <p class="text-start p-3">
          The figure on the right shows
          <strong>the population in Copenhagen</strong> during the same time
          period as the car registration trends above. There has been a steady
          growth in population over time, similar to the growth in registered
          cars. It seems that the awareness of the climate crisis and the focus
          on public transport has not affected car registration. However when
          the car registrations and population data are compared it can be seen
          that even though car registrations went up 30.6% from 2006 - 2020, the
          population for the same time period went up 20.7%. This explains some
          of the new car registration increases but not all.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/PopulationCopen.png" class="img-fluid" />
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <img src="../assets/CarsTypeCopen.png" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <p class="text-start p-3">
          The stacked barchart to the left describes
          <strong
            >car registrations per year for four types of cars, gasoline,
            diesel, electric and hybrid</strong
          >. It can be seen that the amount of
          <strong
            >hybrid and electric cars are only a fraction of the total car
            registrations</strong
          >, even in 2019 and 2020. This graph is very hard to read due to the
          huge difference in car registration by type. In this case, it is much
          more informative to look at the same data using logarithmic scales and
          to look at the percentage changes in a different type of cars between
          years.
        </p>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <p class="text-start p-3">
          Looking at percentage changes from year to year is useful for spotting
          big changes. The plot to the right,
          <strong
            >describing car registration trends as percentage variation</strong
          >, informs us about crucial years for the electric and hybrid car
          industry in Copenhagen. In 2013 there was a big change in the trend of
          electric cars with rapid growth in the number of new cars per year.
          For hybrid cars, this change in trend occurred in 2018. In In contrast
          we see the number of diesel and gasoline cars is increasing slower
          than in previous years.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/PercVariation.png" class="img-fluid" />
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <img src="../assets/CarTypeLogCop.png" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <p class="text-start p-3">
          Using a <strong>logarithmic scale</strong> allows us to see the trends
          by type of car even though the amount of diesel and gasoline cars are
          way higher than the amount of hybrid and electric cars. Gasoline car
          ownership had a drop after the 2008 global crisis but began increasing
          again in 2013. The Diesel cars have more or less a linear growth over
          the whole time period but there is a clear change in 2019, exactly
          after the Danish parliament political proposal of reducing gasoline
          and diesel cars in the whole country. Both
          <strong
            >hybrid and electric cars seem to have exponential growth after
            2016</strong
          >. <br /><br />
          There have been a lot of political changes in Denmark in the last few
          years regarding tax and car production. Danish regulations of taxing
          cars have drastically changed since 2013. Registration
          <strong>exemptions of 105 - 180%</strong> were introduced for
          <strong>electric and hybrid cars</strong>, and also green owner tax
          exemptions. This is remarkable considering that car taxes can be over
          200% of the car price in Denmark. This is changing in 2021 where the
          tax on green cars is increasing but still remains significantly lower
          than fossil fuel cars. On the other hand,
          <strong>EV battery costs</strong> have been
          <strong>decreasing</strong> worldwide since 2015. There have also been
          <strong>dramatic decreases in hardware costs</strong> for standard
          charging stations and car battery lifetimes have also improved.
          Another change important to note is that there has been an
          <strong
            >increase in number of electric and hybrid car manufacturers</strong
          >, for example, Toyota and Seat and other affordable electric and
          hybrid car models.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#first {
  background-color: rgb(235, 230, 226);
  /* background-color: rgb(255, 255, 255); */
  /* height: 700px; */
  width: 100%;
  padding-top: 30px;
}
.li .borderless {
  border-top: 0 none;
  border-bottom: 0 none;
}
</style>
