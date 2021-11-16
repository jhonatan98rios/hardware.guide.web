# base image
FROM node

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start


# docker build . -t node:next
# docker run -p 3000:3000
# docker stop <container id>
# docker network connect <network name> <container id>
# docker start <container id>