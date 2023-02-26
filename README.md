<!--lint disable awesome-heading--> <!--lint disable awesome-git-repo-age-->
<!--lint disable awesome-license--> 
<!--lint disable double-link-->

# [congratulation.today](https://congratulation.today/) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) 
<!--lint disable awesome-badge-->
<!--lint disable awesome-heading-->
 > ### introduce
Happy birthday, how was your celebration so far? Didn't you spend a lot of time just busy replying to countless KakaoTalk messages and Instagram DMs? congratulation.today was created so that you can fully feel and record the precious feelings and excitement of congratulations. 
 > ### event service
 > #### Powered by JaeJikTon 3Team<a href="https://congratulation.today"><img src="https://jaejikton-3team.s3.ap-northeast-2.amazonaws.com/jaejikton-image/Screen+Shot+2023-02-20+at+23.10.49.png" width= 80></a>


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation


### Client
Package Manager : yarn
~~~
yarn install

yarn dev
~~~
Then you can check `localhost:3000`

### Server

#### How to run?
##### - First
After cloning the project, install the necessary packages in requirements.txt. (Recommend isolated environment / ex... venv or conda )

    pip install -r requirements.txt
    

##### - Second 
There is no proxy web server(ex. nginx or traefik). You can run the server using <b>uvicorn</b> or <b>gunicorn</b>.
<p>(If https communication is required, ssl registration using openssl is recommended.)

##### - Third
If you want to run it with uvicorn, the following command is recommended.

    uvicorn main:app --host 0.0.0.0 --port 8000 --ssl-keyfile /path/key.pem --ssl-certfile /path/cert.pem
    
    
If you want to run it with gunicorn, the following command is recommended.
    
    
    gunicorn --bind 0.0.0.0:8000 --certfile /path/cert.pem --keyfile /path/key.pem main:app --worker-class uvicorn.workers.UvicornWorker

    
    
##### - Details...
Environment variables required for code execution are empty. Please properly input the values you want to use and execute them.
- Expected Requirements Value(postgresql require setting value, AWS creditional, etc...)

Due to the image processing ai library called rembg, the minimum server specifications are recommended below.
- CPU: 2 GHz or higher fast processor (recommended: 4 GHz or higher)
- RAM: 4 GB or more (recommended: 8 GB or more)
- Disk space: 10 GB or more free space

## Usage

Replace the contents of `README.md` with your project's:

- Name
- Description
- Installation instructions
- Usage instructions
- Support instructions
- Contributing instructions
- Licence

Feel free to remove any sections that aren't applicable to your project.

## Support

Please [open an issue](https://github.com/fraction/readme-boilerplate/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/fraction/readme-boilerplate/compare/).
