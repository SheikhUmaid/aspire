#!/usr/bin/env bash

set -e  # exit on first error

BASE=src

echo "📁 Creating base folders..."
mkdir -p \
  $BASE/pages \
  $BASE/assets/{images,icons,logos} \
  $BASE/styles \
  $BASE/routes \
  $BASE/utils

echo "📄 Creating global files..."
touch \
  $BASE/styles/global.css \
  $BASE/styles/variables.css \
  $BASE/routes/AppRoutes.jsx \
  $BASE/utils/constants.js

echo "📄 Creating core pages..."
mkdir -p \
  $BASE/pages/Home \
  $BASE/pages/About \
  $BASE/pages/Contact

touch \
  $BASE/pages/Home/Home.jsx \
  $BASE/pages/Home/home.css \
  $BASE/pages/About/About.jsx \
  $BASE/pages/About/about.css \
  $BASE/pages/Contact/Contact.jsx \
  $BASE/pages/Contact/contact.css

echo "📁 Creating Programs pages..."
mkdir -p $BASE/pages/Programs

touch \
  $BASE/pages/Programs/YouthDevelopment.jsx \
  $BASE/pages/Programs/WomenEmpowerment.jsx \
  $BASE/pages/Programs/SportsPromotion.jsx \
  $BASE/pages/Programs/DigitalSkills.jsx \
  $BASE/pages/Programs/MentalHealth.jsx \
  $BASE/pages/Programs/HealthMedicalCamps.jsx \
  $BASE/pages/Programs/VaccinationPrograms.jsx \
  $BASE/pages/Programs/AnimalWelfare.jsx

echo "📁 Creating Community Awareness page..."
mkdir -p $BASE/pages/CommunityAwareness
touch \
  $BASE/pages/CommunityAwareness/CommunityAwareness.jsx \
  $BASE/pages/CommunityAwareness/awareness.css

echo "📁 Creating Approach page..."
mkdir -p $BASE/pages/Approach
touch \
  $BASE/pages/Approach/OurApproach.jsx \
  $BASE/pages/Approach/approach.css

echo "📁 Creating Impact page..."
mkdir -p $BASE/pages/Impact
touch \
  $BASE/pages/Impact/ImpactOutcomes.jsx \
  $BASE/pages/Impact/impact.css

echo "📁 Creating Partners page..."
mkdir -p $BASE/pages/Partners
touch \
  $BASE/pages/Partners/Partners.jsx \
  $BASE/pages/Partners/partners.css

echo "✅ Folder structure created successfully."
