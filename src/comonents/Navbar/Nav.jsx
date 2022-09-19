import React from "react";
import  classes from "./Nav.module.css";
function Navbar() {
    return <div className={classes.navbar}>
        <ul>
            <li><a href="https://edition.cnn.com/" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAzFBMVEXLICb////HAADLHyX9/f78///KExr03t/Ucnj23N3IAAzLGSDLKC7LUFLlyMjjkZT79PTtw8TglZXMAADIAArm1tf9/fnMChTGQkXmsrPPR0jpq6vnu7vKFRzLICn56OnSbG/enZv27+3RZWfaiIjILDPMPUPfpKTBAADv0tLVgYPWe33CESDALjG+GyLENTrPVlvfoJ7Vd37UYmTNSlLfqKzu4uD18/DONDvz0NTNRU7kt7nSXVzXeHbdmJbMSlDrqa7wwsjSi43IOUSjkI3GAAASKklEQVR4nO1da1vbuBK2JUsBKdBA3Ji02LlBIGR3m5ZDQmFLetj//5/OjAPxyHdK7T0f9O7TfUhiRdKr0WhmNFIcx8LCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLC4k3ggP3fmQ+LyxR8VFjNG0rxl0riP7nRjDfW+uuIIqhah4Fivt9PQTq0H9ApHTD2x59//sWYL52oZh8jR/p9/68vf/5x3Q90RSH9Wjfr90MoHewbw1T0nn7WRwTdVCw6Ongeniw+pvEsyaM8Ctl2sti4iPVwrP1aA88jJcePaw9L9T5OjpjUJU+Hy6T29Uw7wWPy+lyWFPxdgIGX/b/Gd+uecHPxOUiehRGcLfBNeHYA/xPTiaNqiLMMTqfwtNiVdN3O2A9Lnj4l1R9IR3WSl52g6ckDM0ay+enHfDZeOFHJ08H9cfrjzTMrG/O4HDuYpkqJwxXjvIDNwOSEq0PCiWqYE84D+W3xMoDVnDhs5qU+xNeLe1kmKlyrYboGD8pd+UWlUnLC/RY50ao7mb5Icw1Oov6FSLPn4eveqqShnKtjeMwkE14Kd6HD/GWEcOLFc4dy0ujc4Sr6mh72Ek54FCxFwfODcTEpXJ0UkC46lzqXlH+NE80uekV9zOEkcvTW8wqeF+4sKKiGs6viqbkOc1etf4MTtBb8h3XVpDE54apT/LwYHIX5hoNeldWyyO3hv8AJRyG5EjUpeZ076kNpgWmQu/pwVsIkYMj+PziBxW5+CB2sM3FeOQHr1bBfsmWP/bzGhgel3z1wxzJbrH1OYCGY9eJOZTqWWVZiTgKY9KBg6Xte9jnxLatSeMQWiXR5OaXcXpR1gVrnhDvsNNu0HSPYxlEaE4XOEFsYlKyfVl9WV1MynbyNznQuCs9Mxo+Xn+YH5wbz5/2MImqbE6DkLl8xeIvht6N5V4cmwDNBg/PSEKqvgdJaKv24/yZYwu6yukFeUE68GQugGDsb0XdXGSu/XU4iHvlDkwoRz4TR3a3qBzLUPANYpMADGBMhEU9sJ/CaTZIJ6ImHjJr1T0jvxH/UrlgoO8QK6Kh0sXY5ASlJUYJdFCe30o9NBVClOXLipFyQDlASghsCEsSSTg/EIiMojHhv7oRFXGoO6klfJqpl4C5latK1yAn2GSbOIEWKGH5hIXi8Wvrsmp/NxilskRRDupYykqv1oDMPue4SOUHfxKxS9Qj5YLX6p5vNEBzp4GK/7Hliw7VpzbYpJyAlTylCXHF+72vQF4H/5/ju+yZnaRiqyOFkEgjxRXOFEZTNPaxhVICmqRHnAfkQpAsNOM89gcXd7xCldsX+NTmJHNAKKXN+dMtAhWjGLxZewVp8h/YJ5aTX5fpBDLyBewydCajCfGJG3M3g5Jg5wQeYYdDNgId/E5vRm5sapU1OwrOBYXcJdyglCAHbDl/ez3No0py4yAkOODw7k1T7AuH3Ru+ynAgckyl4jH3yhQI+oj1tU58YGg+jZEtcP9Tlean5/TmPk6PdV2ALieXiueeGoOTISYwnpvV9IibgQhoRxRY5Sa3CYvPgRzwMn4Q7KCOlhBPPfVaOnhNL1TWsjQJOUCM5fqLaPDEyVqy2OOGRvCW6BOzs6RfpcDU3ZOeNnMSmORqBiW7o0N4VcAJqFhRROH1V6NCsC0WKtSYnXBFLHJTplIeRZjfVznEpJ+4jc7TckG+5IW5P0dxx3b/DKBiTpad3SRRRa5woMDmJCp1+CXcRg3dy4m51FFAL3lNkB62Qk44P/iHpKnLbOifadFg8sLe4/1jNSAUnnnt4zclmgzcQd4pHUQUnwr0I4EuSERFimwhKS5xEbGhYJge4YDzWCqH8xFhroZwI90fI5RF5Xnzab/MVcuKJHq6DVOkvkvhLO5xwPheUkysWm/l5AY0MhqWcgK4GBwbcntev8tzE7SnmBMweH9wJj4zKcr8et8SJMtbhDsx5dZHacsEx760fr56eTw3cYlykWJ+gb+fwe7pbMX7tXbE+gcrm4A4+J6VEb6+I2uFEO3SWiKPQCbeuCbBSzsdd5qsgCGSQQIboFZRwIjy0NiaEk1HIKznx0IvmckTe+Oq3yklg+H7DvsM1dVPQpu1NHF/yOLUhFT+p4MQVJ/2IM7r7+RTsbPUyOXHFOHTAZkp67766Pa1wwtmITJRBBArgc0qVnHdLNx1LOAGltJKOpMFor7vrXenccUeo1I6JUjthLXKibxNdNnCfFPq1ZDKBphuz8pyQMk5QP5kBW/Hi9pRwIsCSPgU1O/eIL/7i9rTAScSDoTvw9o2B3rPvpLGumG7R+IxK0l3K5g7gInD0NtkIEO5RWMEJPovGKzoG+3asfc6jVjiBVWNKZsqdz+WtsQz3ujmbLG/ixENzZ0g83U7s/ZfqE2DuHJ4KNuQNdHt4K5zATCF2wENI3XucOA+VlFRxgtYGd5LeuSIOspZzAhxsQx7c7ONcAiw51Olt6BMjPrhgXM/Ja88dF+1/1+YEdMIZ9I66Pb1QV8kJ4JDt4th7CYMlsQ1O4s24BB9U5P+kg/WYt2X7Nk5iqrVj7LLHKTdVnIDxqvWKKDv3Qbcyd3RIbYdLzmkI9UVc380JWBs8nCVTVKCdWsmJ6AFz7Jy8EVtyLXDykCgTjGjph6QKWBBrJUNVceLFxivZ7REYwK6cO5648iOyHwJvHMg2OAkP9sPnuY8+N/avNjre6HsvJ4BTDEPS3t2GlZyIOKrtJw0S7pS1wQlUkYg0eJ/sWCT7XsDRb+JkcKkxKSnBWulKfeLG+yGSmtlPfgucqGS+ghkOZtKUzKVZvRzcGpy4Q1jRApoPdhHU4ETcBo4RhvTuVfOckGVHeDCYNOLWqzZNanOCMftgSXonZA1O3FGQyuQ4Zi1wQr5yGnJY+xJkt71/nRMB1gZXh0kgHCSnmpMBGq96S13Sh+Y5uSZLcUdxw4Md5mZc/RIn4C3cBJzGZWA9Jl0tmjvupqs5dXvcRWL8NWWzXZO5cgha/YZU/1TDhq3JCX4iHd7fay/QLAtSdQEnuEML/rEkDpigO4vNcwKWvZE7dFPzmEM9TuIMgctNfpS3SJ8AB+CCgWOQFzBvjBPSxkXf5GT5O3UsdOFMa8O7KuMk4QCN1/z028b0CeWEOYardvEb5IT2BTru+EZYs4gTGkvCZB65ystqaExOSLJQhzmGPvlas4qyGPXjPkawyxCg2RfFnIjP5LOpciJwDFrjxGGjxI4a+U5Im1zLKS7nxP06IS/wLIlhbRRx4s5HRMIm4PbMczKCGrRP9pVNNdd0F6PD3q9PPl/TFOvY7ck73JDhZEZKeXMdsa/ZQk1x4idns4QLHnx3kEzcQff9nPxkS+JQeaC10/mmuZx8YgtCCka1Zfo0WIOc0BbehsZcwirfGyv4rEjvwPNWcXJ+Zt81w4k888jsOZJO8KM1TuhRMgELjU9iOLin8m5OfP0f2o+txvU+oxsynOCZuIS5DljU7GO6WGMxpRnhBDggBgq04L7qsG81JwpTFBKArez46zQlOZw4iph3AhwD/ZA5W9fQWsxppGd6zfk9rXVYS1AqONGXVM3+kFzfVssJN6LaYoP5CY8p7dzYXoZKjCgBdnTk0xy2nCz5t3PiqA/7EfYEpg5fkwIFnGiH+9R4/Yyjk1qwGuOEhEk9d6JSJja4QFGlqFRxAop7b6wL8RUk54uXMsFyOHHCJG6B+yGa4xO0WGOcSOp7r0FEI6rw3acadlslJ3JMVhqMXPk0DFnECUa1k2LwhA7XhkppjBNTgaxCTlWiEOLArwzJVnHCnevvRBWcMI7ZF4ZOyeVEp5N55Mw4JNFcXoGRQA3t1Z+STC48q3LLqq6nqOIkcvQ/NOoIxEvjtFw+J7D8kmQeMYodgxbkhHMnMKzme22undCXZRUpqpIT7iehMhFnCPim25PPCQ9GJGJ+6nN91oY+cRzq4gww3sgjOhjw98/r8qBBFSfIvU78b8+NrY1KTmDAaChUeF0eGWHIBnO3jMkj/gmd4IaeFRHxoZU4Uz6/RswnquKEBiG8eC/NPFOWy4lDthVQszyCvXdN8hOazGf7Rle472hoLqh1hHcqLG6ZCvNtFW7EYIrkxAyV3TG05Ii+zOckwqg2eWobRjTA02TOcED65IplAD0wpm1sTIyuZpeM+RkoJuk9DEVy4ugVOTKFQVYj37RATiJTnDq4qZ5w0Gh+7IQQIHqRjlMOyRmV19N508XxeQbHUypUhXIC1gZZeo7BFgRLbl+waO6kElW/BU54tA9oNiknnPcS49vD9jr+t/RBuF1fsm+lzvEXyonDL5NZ4Ak8BEbcz0JOHJ++3cM0sPPXpjXIScSDp4QAmCkTIIU953Q/FyZ1xZw4wWRv4IPFDG4P0c3FnPCgQ6q4gvX43mtBTmClpHl+wj0A88i/wJTMusTU4YSrfS2eu8v1rMEJGK9ED2Hq8P4QWLOcpIJY4hb8Hn88KL1K6c2cOMEBEUcBasvfHxEq4cRQRPF+yGsqVbOcoB2wFwqY9gJzYv2HqZueGu/ihNMwJKbK6b0lV8YJJvO8NA5mzd/h3pJr+IwkTlLDlZj1nShUj2+WlBIdy9HtIViBtfGtBieR/5UMTUfpiO3sp4Y54eaWrDfAo7Rgtd9mo+W/ygn2rk9dKUwd9l8ubABOZBEnjjbCkHgIbJtw4jfGCcaWqEEP/4aB5jpkNyM397R1GSdEOX+mzeS6S0xzdxnwcOUSTpLF2uAEvWi6HwJUvqRl4511jd3jx50wGhkWiRCdOcaTZLhcC5FnrORiFO77+cKJUY+xHz3VYLjt9gmQk9MiThx6WZ8nMA0sNrRF5h6/33yHQyS/CKpR8WjXk5J44yP7dNVJX3hRhBtwIZ/J13xVZjWMxuwx1/My9hxOGFdPhZykDllt9Y5b4Y6htkbvewzGgrQq7tbogOFtqDpQ9+Or/3Z6HmBQDK/3bHokrvshldcTG6/7zOh7DfMCr08ch9zYWbpP+ZuoiPZEY04ZXnYnenibU+KsicPUALwfEVtmN+g6Sxbf6KqlYtdMBeVgARjFxm1aY/PyH3D2qbWBR8792++LJRiJkvpNkckJ55c0DIluKns6PPnHzFPIuXfm/WCx7ZqKKE0nc6X07qBb9vIg4yAc/hccGaonNeCwHt+TNUQAGVHoB5I7fXrF2zSTDWTkMve6GmVXheA30xDE0P/tlIAHcpNrkHQmK5/5QRjqcoShZAcGJb0wM8NJzB4m4ozxnddsXOm3SHeO0xOT0CCN15DwSBt5yLWTzd5ECkyfnAVmAFPXWwyfx0fbs3Jsbw6FoBdhnGRTJ0mGANqJT3+AmCi5NHzunOxC6kV7YjRjSkrWfTSEel5nh+7tpKiV9wtezmuj3HSEIWfkuPwhkgiIcKfD5+efqR3kVXafGh0Dcs0EyO7z8zm1dvAIRRPX+DlRJLud3DDJr8DbZKcOCuNx2osyKhRizaLMGRnjPq5dGZH6jueauatvBSy88s79XbjLUXrQ3W4qI9RkSJCT+BTBjVkoRYm36TYxdV5YYbMpSufbgyfpNm8KqsAbaNIpAqR3a5V/koo9lkiwJ04bvFEXdLweil8JKJkQ4qYgwTbyT8vm51H+eEdaHpbounUDxgkBLI3bxbu0SkxoYd4kqJQr1Mb5rD8VqEqwZHTxZUaDs4KLe38P0PTS6hbXgrpuThp4mdtxSRo29ye5QfAXJosK6m6nQH4x6N0MGwRRyGbHbvlN7sXwMFmxpJFggF7kfrU4L5sCXIOfkzdOYsze+hMdvwAOnjL7cjUVO2+5drAAHwb1OliWn5vjPNiOUmKIr04r7kbQ7Nl7qYVgupXZ1bsZcK781dXOnqovL0ji8LLixCnHW1EnXuprF0es6PcP9k3yz07oEOEXDHUbP5Tx2gIQFqUuf9wtprWuEoob2Vvc8BpncDHNg0/IJoq3mF1X60l0crbnJGtwM/ynGfu1uAn4Tyom57fji8ndsAJX4BRphuquRjMxwUSuJifraW/68fxmznKs3pxSsACw7ni4WPd668XdOGK6Vhbv7wdHpzcIwEEvj6BIWSul9hWREwaMsWsGbvdbrFAu/X6f4Z5+6Q/T/F/gzT/QFN/6gbervK3gy7VFLenVwlY4TvXPS729ifwXy6V+tMrCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLC4hX/AyTmf0OFlh9WAAAAAElFTkSuQmCC" alt="logo"  width={50}/></a></li>
            <li><a href="#e">World</a></li>
            <li><a href="#e">US Politice</a></li>
            <li><a href="#e">Business</a></li>
            <li><a href="#e">Health</a></li>
            <li><a href="#e">More</a></li>
            

        </ul>
        <ul><li><a href="#e">Audio</a></li>   
            <li><a href="#e">Search</a></li>
            <li><a href="#e">Log In</a></li></ul>

    </div>;
  }
  export default Navbar;