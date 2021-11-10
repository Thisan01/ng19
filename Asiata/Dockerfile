FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Thisan01/ng19 /root/ng19
WORKDIR /root/ng19/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
