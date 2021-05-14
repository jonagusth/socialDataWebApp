<template>
  <div id="second">
    <div class="row align-items-center">
      <div class="col-md-12 p-3">
        <!-- <h3>Car ownership type by district</h3> -->
        <h3>Car ownership by district</h3>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-4">
        <img
          src="../assets/CopenhagenMapDist.gif"
          class="img-fluid border border-2 border-dark"
        />
      </div>
      <div class="col-md-8">
        <p class="text-start p-3">
          As stated in the previous chapter the amount of electric and hybrid
          cars in Copenhagen has been rapidly increasing in the last 10 years.
          These findings provoke the following questions. How are these cars
          distributed by areas? How do salaries and locations affect electric
          and hybrid car ownership?
          <br /><br />
          To be able to compare car data between districts, the number of cars
          per 100.000 people was analyzed. The plot to the left shows the
          evolution of car ownership by district in Copenhagen. The districts
          include City Centre, Østerbro, Nørrebro, Vesterbro/Kongens Enhave,
          Valby, Vanløse, Brønshøj-Husum, Bispebjerg, Amager Øst and Amager
          Vest. The number of cars over the years has increased in all districts
          since 2006, the most drastic changes are in the northwest part of the
          city, Vanløse and Brønshøj.
        </p>
      </div>
    </div>

    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <p class="text-start p-3">
          The graph to the right displays the car trends for four types of cars
          by district. The scale used is logarithmic, meaning that the graph is
          useful for defining trends per car type but not for comparing the
          number of cars per car type.
          <br /><br />
          Electric cars started appearing in 2008/2009 in the City Center and
          Amager vest. Nørrebro and Østerbro joined the list in 2013 and
          Vesterbro/Kongens Enghavein in 2014. Then in 2015, electric cars
          started appearing in the other districts. This was not the case for
          Hybrid cars that didn't appear until 2017. The first hybrid cars were
          spread evenly by dirstrict, except for Bispebjerg and Vanløse who
          didn't have registered hybrid cars until 2019. It's stated previously
          that the total number of cars in Vanløse was one of the highest per
          person, but this chart shows the opposite for the specific case of
          hybrid cars. It is suspected that this difference might be related to
          salaries, so let's have a look at annual salaries per person by
          district.
        </p>
      </div>
      <div class="col-md-6">
        <div
          id="carouselExampleIndicators"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="9"
              aria-label="Slide 10"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="10"
              aria-label="Slide 11"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/Neighborhoods/Copenhagen.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/AmagerØst.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/AmagerVest.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Bispebjerg.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Brønshøj.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/CityCentre.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Nørrebro.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Valby.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Vanløse.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Vesterbro.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/Neighborhoods/Østerbro.png"
                class="d-block w-100"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <img
          src="../assets/Neighborhoods/AnnualSalaryDist.png"
          class="img-fluid"
        />
      </div>
      <div class="col-md-6">
        <p class="text-start p-3">
          The plot to the left shows the average annual salaries (pre-tax) by
          district over time. This data represents people who are eligible for
          work. The City Centre and Østerbro are the wealthiest districts
          whereas Nørrebro and Bispebjerg have the lowest average salary. There
          is a high contrast between some districts such as the City Centre and
          Nørrebro
        </p>
      </div>
    </div>
    <div class="row align-items-center p-3">
      <div class="col-md-6">
        <p class="text-start p-3">
          The scatter plot to the right shows the average number of cars
          registered per 100.000 people by neighborhood over the years versus
          the average annual salary. Each dot represents the number of cars per
          100.000 people for the average salary of those people in one year. The
          plot shows that Vanløse, Brønshøj-Husum, and Valby (Copenhagen
          suburbs) are the districts where people have registered a higher
          number of cars per person than in the other districts despite not
          being the wealthiest as seen in the previous section. Vesterbro and
          Nørrebro have the smallest number of cars per person. This further
          confirms what was displayed earlier, that the City Centre and Østerbro
          have the highest salaries. Interestingly the number of cars per person
          in the City Centre and Østerbro is lower than in the suburban areas. A
          possible cause for this can be related to the Copenhagen suburbs
          lifestyle, parking space availability, and public transport
          infrastructure. The scatterplot also shows that there seems to be a
          linear correlation between the average number of cars and the average
          annual salary for most districts. Let's have a look at the Pearson
          correlation and regression lines for the same data for confirmation.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/Neighborhoods/CarDistrict.png" class="img-fluid" />
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-4">
        <div
          id="carouselExampleIndicators2"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="9"
              aria-label="Slide 10"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/PearsonLines/CorrelationAmagerØst.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/PearsonLines/CorrelationAmagerVest.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/PearsonLines/CorrelationBispebjerg.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/PearsonLines/CorrelationBrønshøj.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/PearsonLines/CorrelationCityCentre.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/PearsonLines/CorrelationNørrebro.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/PearsonLines/CorrelationValby.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/PearsonLines/CorrelationVanløse.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/PearsonLines/CorrelationVesterbro.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/PearsonLines/CorrelationØsterbro.png"
                class="d-block w-100"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-8">
        <p class="text-start p-3">
          The scatter plots to the left show the average number of cars
          registered per 100.000 people over the years versus the average annual
          salary for every district. A linear regression line has been added
          together with the Pearson's Correlation Coefficient that looks for a
          linear relationship. Valby, Vesterbro, Brønshøj-Husum and Amager show
          the highest Pearsons Correlation Coefficient (near to 1) indicating a
          a strong linear relationship between car ownership and salary. In the
          City Centre and Nørrebro however the salary is not linearly related to
          the average number of cars per person.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#second {
  /* background-color: rgb(235, 230, 226); */
  background-color: rgb(235, 230, 226);
  /* height: 700px; */
  width: 100%;
  padding-top: 30px;
}
.li .borderless {
  border-top: 0 none;
  border-bottom: 0 none;
}
</style>
