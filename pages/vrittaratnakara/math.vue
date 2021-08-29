<template>
  <v-layout
    column
    justify-center
    align-center
    class="papyrus">
    <v-flex
      xs12
      sm8
      md8>
      <v-card
        class = "bordered text-xs-center"
        color="primary"
        dark>
        <v-card-title class="myheader2 papyrus text-xs-center"><h1>Mathematics in Sanskrit Prosody</h1></v-card-title>
        <v-card-actions>
          <v-layout
            row
            xs12>
            <v-dialog
              v-model="dialog2"
              scrollable>
              <v-btn
                slot="activator"
                :ripple="{ class: 'error--text' }"
                round
                color="accent darken-2"
                class="text-capitalize font-weight-bold"
                large> Mathematics in Sanskrit poetry</v-btn>
              <v-card
                color="info"
                class="papyrus bg1"
                light>
                <v-card-title class="myheader papyrus"><h1>Mathematics in Sanskrit poetry</h1></v-card-title>
                <v-divider/>
                <v-card-text class="subheading papyrus font-weight-bold">
                  <p>
                    It is interesting to observe that in Sanskrit poetry, the concept of binomial coeficients, Fibonacci numbers and binary numeration has been in use right from the days of Pingala who was the first to write a treatise on Chandas-shastra relating to metres in Sanskrit poetry.</p>

                  <p>In Sanskrit poetry, we have stanzas with four quarters. Each quarter may have the same number of syllables or the same number of time units, a short one being assigned 1 time unit and a long one 2 time units.  There are metres in which the odd quarters have the same number of syllables or time units, while the even quarters have a different number of equal units.</p>

                  <p>A Sanskrit stanza or padya consists of four padas or four quarters, which are regulated by</p>
                  <ul>
                    <li> The number of syllables in each quarter, or</li>

                    <li> The number of syllabic time units or matras, a short                         sound being assigned one unit of time and the long one                                                                      .               two units of time.
                  </li></ul>
                  <p>   Each stanza or padya can thus be of two broad types, vritta or the one in which metre is regulated by the number and composition of syllables, and the other jati, where the metre is regulated by the number of syllabic instants or time units in each quarter.</p>

                  <p>If all the padas are similar, the padya is called samavritta,; if alternate quarters are similar, it is called ardhasamavritta, and if all the quarters are dissimilar it is called vishamavritta.</p>

                  <p>A syllable can be short or long; short vowels followed by anuswara or a visarga or a conjunct consonant are considered to be long. Any exceptions to this are generally granted as poetic licence to be exercised, depending upon the exigencies of the case.</p>

                  <p>8 sets of triplets of long or short sounds or a mixture of both have been classified by Pingala and called ganas. He has chosen syllable triplets consisting of all short or all long or a mixture of these two sounds.   The interesting thing is that he has used the concept of binary numbers in place of the decimal numbers from 0 to 7. One does not know whether the present symbol for zero was known to him or not.  </p>
                  <p>Pingala had considered how many patterns can be formed from a given number of syllables, for instance, how many patterns consist of 3 syllables, how many consist of 4 syllables and so on?  They can be of different types, all short or all long or a mixture of long and short sounds.  (Let S denote short sound and L denote long sound).  In other words, combinatorics or the principle of permutations/combinations and the binomial coefficients had a large role to play in this regard. We examine a few cases with a fixed number of syllables, long or short or a mixture of both.</p>



                  <p>Pattern with 1 syllable (Long or short): L, S        No. of patterns = 2  =   2<sup>1   </sup></p>

                  <p>Pattern with 2 syllables: (Long, short or mixture) LL, SS, LS, SL   No. of patterns = 4 = 2<sup>2</sup></p>

                  <p>Pattern with 3 syllables: (Long, short or mixture)</p>

                  <p>All short      SSS                                      No.of patterns = 1</p>

                  <p>One short and two long:

                  SLL, LLS, LSL, LLS,                           No. of patterns = 4</p>

                  <p>One long and two short:

                  LSS, SLS, SSL                                      No. of patterns = 3</p>

                  <p>Total number of patterns: 2<sup>3</sup> = 8.</p>



                  <p>      It is interesting to see that when the number of syllables is n (long, short or a mixture of both) the number of patterns follows the pattern of binomial coefficients in the expansion of (a + b)<sup>n</sup>, and the total number of patterns possible is 2<sup>n</sup> and when n = 4 it becomes = 16, and when n is 5, it becomes 32.  Further, for s short and l long syllables, or l short and s long syllables, the number of patterns available in this case of a total of s + l syllables is  the binomial coefficient <sup>s+l</sup> C<sub>s</sub> =  <sup>s+l</sup>C<sub>l</sub>,. It looks strange that binomial coefficients should find some reference in Sanskrit poetry right from the early days.</p>




                  <p>Pingala’s Chandas-shastra as well as Lilavati and Vrittaratnakara give directions for computing the number of possible varieties and finding their places or that of any single one in a regular enumeration of them.</p>

                  <p>For instance, the number of padas and syllables in a few of the metres is as follows:</p>

                  <p>Gayatri(tripada):     3 padas and 8 syllables in each</p>

                  <p> Anushtup: 4 padas and 8 syllables in each</p>

                  <p>Viraja:       4 padas and 10 syllables in each</p>

                  <p>Trishtup:   4 padas and 11 syllables in each</p>

                  <p>Jagati:        4 padas and 12 syllables in each.</p>

                  <p>A well-known quantitative scheme in the traditional literature classifies the common metres according to the syllable count of a stanza, as multiples of 4, as follows:  </p>

                  <p> Dwipadaviraja        20 syllables</p>

                  <p> Gayatri:                  24 syllables</p>

                  <p> Ushnik:                   28 syllables</p>

                  <p> Anushtup:               32 syllables</p>

                  <p> Brihati:                    36 syllables</p>

                  <p> Pankti:                     40 syllables</p>

                  <p> Trishtup:                  44 syllables</p>

                  <p> Jagati:                       48 syllables.</p>

                  <p>There are many comprehensive schemes in the traditional literature, each distinct type of stanza carrying its own name. </p>
                  <p>Source:<a
                    href="https://sites.google.com/site/mathematicsmiscellany/mathematics-in-sanskrit-poetry"
                    target="_blank">Here</a></p>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                    color="secondary"
                    ripple
                    @click.native="dialog2 = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
          <v-layout
            row
            xs12>
            <v-dialog
              v-model="dialog1"
              scrollable>
              <v-btn
                slot="activator"
                :ripple="{ class: 'error--text' }"
                round
                color="accent darken-2"
                class="text-capitalize font-weight-bold"
                large> Binomial Triangle Computer Binary System By Pingala</v-btn>
              <v-card
                color="info"
                class="papyrus bg1"
                light>
                <v-card-title class="myheader papyrus"><h1>Binomial Triangle, Computer Binary System By Pingala</h1></v-card-title>
                <v-divider/>
                <v-card-text class="subheading papyrus font-weight-bold">
                  <p>Ancient Indians used Mathematics extensively and relied on it so heavily that Indian Logic, Philosophy,Hindu Rituals and the Sanskrit Language have strong Mathematical base. Meters, called Chandas are used in Prayers, literary works have a strict Mathematical base. Pingala, younger brother of Panini, the Sanskrit grammarian, has devised Chanda Shastra that deals with these Meters.</p>
                  <img src="~assets/img/PascalTriangleAnimated2.gif" >
                  <p>The Chandaḥśāstra presents the first known description of a binary numeral system in connection with the systematic enumeration of meters with fixed patterns of short and long syllables.The discussion of the combinatorics of meter corresponds to the binomial theorem. Halāyudha’s commentary includes a presentation of the Pascal’s triangle(called meruprastāra). Pingala’s work also contains the Fibonacci numbers, called mātrāmeru.</p><p>Use of zero is sometimes mistakenly ascribed to Pingala due to his discussion of binary numbers, usually represented using 0 and 1 in modern discussion, while Pingala used short and long syllables. As Pingala’s system ranks binary patterns starting at one (four short syllables—binary “0000”—is the first pattern), the nth pattern corresponds to the binary representation of n-1, written backwards. Positional use of zero dates from later centuries and would have been known to Halāyudha but not to Pingala.</p><p><b>The Importance given to 2 by Pingala:</b> Pingala in his rules to Sanskrit prosody has given undue importance to the number 2. Typically, he lays down that, Any power of two throughout divisible by two is equal to two raised to the power of two representing the number of twos the first power is divisible by two, i.e, 2<sup>16</sup> = 2<sup>2<sup>4</sup></sup>, 2<sup>32</sup> = 2<sup>2<sup>5</sup></sup>, 2<sup>64</sup> = 2<sup>2<sup>6</sup></sup> and so on.</p><p>In grouping heavies and lights, Pingala adopts a unique method.If we take Heavy = H and Light = L, for two syllables, we get the combination, as follows:</p>
                  <ul>
                    <li>1 H</li>
                    <li> 1 L </li>
                  </ul>
                  <p>There are two combinations.</p>
                  <p>For 3 syllables, we get,</p>
                  <ul>
                    <li>3 H</li>
                    <li>2H, 1L</li>
                    <li>1H, 2L.</li>
                    <li>3L.</li>
                  </ul>
                  <p>There are  four combinations.</p>
                  <p>For 4 syllables, we get,</p>
                  <ul>
                    <li> 4H</li>
                    <li>3H, 1L</li>
                    <li>2H, 2L</li>
                    <li>1H, 3L</li>
                    <li>4L.</li>
                  </ul>
                  <p>There are eight combinations.</p>
                  <p>For 5 syllables, we get,</p>
                  <ul>
                    <li>5H</li>
                    <li>4H, 1L</li>
                    <li>3H, 2L.</li>
                    <li>2H, 3L</li>
                    <li>1H, 4L</li>
                    <li>5L</li>
                  </ul>
                  <p>There are sixteen combinations.</p>
                  <p>Thus, this is the formation of Binomial Numbers, Triangle and Series. </p>
                  <p>This has been explained in the context of prosody and similar exposition has been made in Vedic literature about the chanting of mantras with time scale. However, the mathematical significance has to be noted here. This Binomial triangle can rightly be called Pingala Triangle and the series Pingala series. Indian mathematicians have identified the series and arranged the numbers in the form of a pyramid, which they called as Meruprasthana.</p><p>Pingala’s system of binary numbers starts with number one (and not zero). The numerical value is obtained by adding one to the sum of place values. In this system, the place value increases to the right, as against the modern notation in which it increases towards the left.</p>
                  <p>The procedure of Pingala system is as follows:</p><p>
                    Divide the number by 2. If divisible write 1, otherwise write 0.</p>
                  <p>If first division yields 1 as remainder, add 1 and divide again by 2. If fully divisible, write 1, otherwise write 0 to the right of first 1.</p>
                  <p>If first division yields 0 as remainder that is, it is fully divisible, add 1 to the remaining number and divide by 2. If divisible, write 1, otherwise write 0 to the right of first 0.</p><p>
                    This procedure is continued until 0 as final remainder is obtained.</p><p>Chandaḥśāstra (8.24-25) describes above method of obtaining binary equivalent of any decimal number in detail.</p><p>
                      These were used 1600 years before westerners/arabs copied binary system from India through trade and invasion.</p><p>

                        We now use zero and one (0 and 1) in representing binary numbers, but it is not known if the concept of zero was known to Pingala— as a number without value and as a positional location.Pingala’s work also contains the Fibonacci number, called mātrāmeru, and now known as the Gopala–Hemachandra number. Pingala also knew the special case of the binomial theorem for the index 2, i.e. for (a + b) 2, as did his Greek contemporary Euclid.</p>
                  <p>Source:<a
                    href="https://ramanan50.wordpress.com/2015/01/22/binomial-triangle-computer-binary-system-by-pingala-hinduism/"
                    target="_blank">Here</a></p>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                    color="secondary"
                    ripple
                    @click.native="dialog1 = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      dialog1: false,
      dialog2: false
    }
  }
}
</script>

<style scoped>
.bordered {
  border: 10px solid transparent;
  -webkit-border-image: url('~/assets/img/border.png') 30 round; /* Safari 3.1-5 */
  -o-border-image: url('~/assets/img/border.png') 30 round; /* Opera 11-12.1 */
  border-image: url('~/assets/img/border.png') 30 round;
  border-radius: 15px;
  margin: 0;
  padding: 2%;
}

.bg1 {
  background: linear-gradient(
      0deg,
      rgba(241, 241, 171, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(~/assets/img/bg3.jpg) no-repeat;
  background-size: cover;
  color: darkred;
}
</style>
