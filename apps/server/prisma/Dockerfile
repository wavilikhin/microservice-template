FROM node:18.9.0
RUN openssl version -v
RUN uname -a
RUN echo $DATABASE_URL

# Create app directory
WORKDIR /opt/app

# Install prisma for the migration
RUN npm install -g prisma --unsafe-perm

# Copy schema and migration folder
ADD ./ ./prisma/

CMD ["prisma", "db", "pull"]
CMD ["prisma", "migrate", "dev", "--name", "initial-migration"]