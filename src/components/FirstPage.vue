<template>
  <div id="first">
    <div class="row align-items-center">
      <div class="col-md-12">
        <h3>Car ownership over time for Copenhagen Metropolitan Area</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <p class="text-start p-3">
          In this project we look and analize car ownership for Copenhagen
          metropolitan area in the period of time between 2006 and 2020. We
          loaded and filtered the data from
          <a href="https://kk.statistikbank.dk/statbank5a/default.asp?w=1536"
            >København Statistikbank</a
          >
          and <a href="https://www.opendata.dk/">Open Data DK</a>
          . The raw data include tables on new private cars registered every
          year in every neighborhood in Copenhagen. Then we plotted the data
          using different visualization tools that include histograms, scatter
          plots and maps, and we analyzed it looking for trends and
          singularities. Our visualization focuses on:
        </p>
      </div>
      <div class="col-md-6">
        <ul class="list-group-flush p-3">
          <li class="list-group-item" style="background-color: rgb(235, 230, 226); !important">
            Car ownership by type over time in Copenhagen
          </li>
          <li class="list-group-item" style="background-color: rgb(235, 230, 226); !important">
            Car ownership type by neighborhood
          </li>
          <li class="list-group-item" style="background-color: rgb(235, 230, 226); !important">
            Trends of electric and hybrid cars, popularly knows as
            <strong>'green cars'</strong>
          </li>
          <li class="list-group-item" style="background-color: rgb(235, 230, 226); !important">
            The future of car ownership in Copenhagen
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-md-8">
        <ul class="list-group-flush">
          <li class="list-group-item border-0 text-start">
            Car ownership by type over time in Copenhagen
          </li>
          <li class="list-group-item border-0">
            Car ownership type by neighborhood
          </li>
          <li class="list-group-item border-0">
            Trends of electric and hybrid cars, popularly knows as
            <strong>'green cars'</strong>
          </li>
          <li class="list-group-item border-0">
            The future of car ownership in Copenhagen
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <img src="../assets/CopenhagenMap.gif" class="img-fluid" />
      </div>
    </div> -->
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="../assets/CopenBar.png" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h4>Car registration in Copenhagen between 2006-2020</h4>
        <p class="text-start p-3">
          The topic of sustainability and living an environmentally friendly
          lifestyle is constantly growing. Denmark is one of the frontrunners of
          implementing the United Nations Sustainable development goals and
          Copenhagen is a hub for innovation and development of sustainable
          solutions. In the recent years there has been a shift in car
          ovnership. People are more and more switching from benzin and disel
          cars to more sustainable elecric and hybrid cars. <br />
          First let's look at how car ownershipt in Copenhagen has been
          developing.
        </p>
        <p class="text-start p-3">
          There are some years where the increase respect the previous year
          slows down, for instance 2009 and 2010, most likely due to world
          economic crisis. After 2013 the number of cars increases constantly.
          Lets have a look now at the population in Copenhagen.
        </p>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <p class="text-start p-3">
          The figure shows a steady growth of the population over time. When
          looking at the numbers for registered cars in the Copenhagen
          Metropolitan area it can be seen that the amount of registered cars is
          increasing. This might come as a surprise since one might think that
          the amount of cars should be decreasing following the awareness of the
          climate crisis and the focus on public transport but when looking at
          the population increase in the Copenhagen Metropolitan Area it can be
          seen that even though car registrations went up 30.6% from 2006 -
          2020, the population for the same time perod went up 20.7%. This
          explains some of the new car registration increase but not all.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/PopulationCopen.png" class="img-fluid" />
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="../assets/PercVariation.png" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <p class="text-start p-3">
          This plot informs us about crucial years for the electric and hybrid
          car industry in Copenhagen. In 2013 there was a big change in the
          trend of electric cars with a rapid growth in the number of new cars
          per year. For hybrid cars this change in trend occured in 2018. In
          contrast we see the number of diesel and gasoline cars is increasing
          slower than in previous years.
        </p>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <h4>Car ownership type over type stacked barchart</h4>
        <p class="text-start p-3">
          The stacked barchart describes the car trends through the years
          including the type of cars, gasoline, diesel, hybrid and electric.
        </p>
        <p class="text-start p-3">
          It can be crearly seen that the amount of Hybrid and Elecric cars are
          a fraction of the total car registrations, even in 2019 and 2020. This
          graph is very hard to read for electric and hybrid cars due to the
          huge difference in car registration by type. In this case it is much
          more informative to look at the same data using logarithmic scales and
          to look at the percentage changes in different type of cars between
          years.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/CarsTypeCopen.png" class="img-fluid" />
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="../assets/CarTypeLogCop.png" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h4>Logarithmic scale plots</h4>
        <p class="text-start p-3">
          This plot describes the evolution of new cars registered in the
          Copenhagen Metropolitan Area by type of car from 2006 to 2020 using a
          logarithmic scale. The logarithmic scales allows us to see the trends
          by type of car even though the amount of diesel and bensin cars are
          way higher than the amount of hybrid and electric cars.
        </p>
        <p class="text-start p-3">
          Now when the trends for each type of car can easily be seen we can
          dive into trends by type of car. Gasoline car ownership had a drop
          after the 2008 global crisis but began increasing again in 2013. The
          Diesel cars have more or less a linear growth over the whole time
          period but there is a clear change in 2019, exactly after the Danish
          parliament political proposal of reducing gasoline and diesel cars in
          the whole country. Both hybrid and electric cars seem to have
          exponential growth after 2016.
        </p>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-12">
        <p class="text-start p-3">
          There have been a lot of political changes in Denmark in the last few
          years regarding tax and car production. Danish regulations of taxing
          cars has drastically changed since 2013. Registration tax extemptions
          of 105 - 180% were introduced for electric and hybrid cars, and also
          green owner tax exemtions. This is changing from 2021 where the tax on
          green cars is slowly in increasing. On the other hand, EV battery
          costs have been decreasing worldwide since 2015.
          <br />
          There have also been dramatic decreases of hardware costs for standard
          charging stations and car battery lifetimes have also improbed.
          Another change important to note is that there has been an increase in
          number of electri and hybrid car manufactureres, for example Toyota
          and Seat, and more affordable electric and hybrid car models have also
          been itroduced.
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
}
.li .borderless {
  border-top: 0 none;
  border-bottom: 0 none;
}
</style>
