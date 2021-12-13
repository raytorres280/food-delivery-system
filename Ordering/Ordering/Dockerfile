#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app

# this does not actually expose anything. docker-compose or kube will do that in yml.
# this is just for logging/documentation
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["Ordering/Ordering.csproj", "Ordering/"]
RUN dotnet restore "Ordering/Ordering.csproj"
COPY . .
WORKDIR "/src/Ordering"
RUN dotnet build "Ordering.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Ordering.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Ordering.dll"]
