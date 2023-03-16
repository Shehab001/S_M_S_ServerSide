import { Divider, Grid, Typography } from "@mui/material";
import { Box, letterSpacing } from "@mui/system";
import React from "react";
import img1 from "../../Assets/Ashkor_Ali_&_Sheikh_Kobbat_Mia_Building_(main_campus).jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../Assets/Sajol-Vai.jpg";
import haq from "../../Assets/Haque-Sir-862x1024.jpg";
import Slider from "react-slick";

const History = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box sx={{ backgroundColor: "#e5e5e5", pt: 10, px: { xs: 2, md: 10 } }}>
      <Typography
        sx={{
          fontFamily: "jest",
          fontSize: "30px",
          fontWeight: "bold",
          letterSpacing: "3px",
          px: 5,
          mb: 2,
          textDecoration: "underline",
        }}
      >
        ABOUT US
      </Typography>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2} overflow="">
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "start" }}
            px={{ md: 10, xs: 3 }}
          >
            <Typography sx={{ letterSpacing: "1px", lineHeight: "30px" }}>
              এ. কে. উচ্চ বিদ্যালয় ও কলেজ (আসকর আলী-কোব্বাত মিঞা উচ্চ বিদ্যালয়
              ও কলেজ) ঢাকার কদমতলীর থানার দনিয়া এলাকায় অবস্থিত একটি উচ্চ
              মাধ্যমিক বিদ্যালয় ও কলেজ। এটি ১৯৭১ সালে স্থাপিত হয়। এটি ঢাকা
              জেলার কদমতলী থানায় অবস্থিত। এটি দনিয়া ইউনিয়নে সবচেয়ে বড়
              স্কুল। ২০০৯ সালের এসএসসি পরীক্ষায় এটি ঢাকা বোর্ডে ষষ্ঠ স্থান লাভ
              করেছিল।
            </Typography>

            <Typography
              sx={{ letterSpacing: "1px", lineHeight: "30px", mt: 5 }}
            >
              ঢাকার দনিয়া এলাকার ব্যক্তিবর্গের প্রচেষ্টায় ১৯৭১ সালে একটি
              ক্লাবঘরে জুনিয়র বিদ্যালয় হিসাবে এটি প্রতিষ্ঠা লাভ করে। দুই ভাই
              আসকর আলী এবং শেখ কোব্বাত মিঞার নামানুসারে এটির নামকরণ করা হয় যারা
              বিদ্যালয়ের প্রতিষ্ঠাতা হিসেবে পরিচিত। ১৯৮১ সালে বিদ্যালয়টি থেকে
              শিক্ষার্থীরা এসএসসি পরীক্ষায় অংশগ্রহণ করে। ১৯৯৫ সালে বিদ্যালয়টি
              কলেজ হিসাবে অনুমোদন লাভ করে। ২০০৭ সালে এটির ২য় ক্যাম্পাস
              প্রতিষ্ঠিত হয়।
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={img1}
              alt="collage"
              style={{ width: "100%", border: "3px solid white" }}
            ></img>
          </Grid>
        </Grid>
      </Box>
      <Box mt={15}>
        <Typography
          sx={{
            fontFamily: "jest",
            fontSize: "30px",
            fontWeight: "bold",
            letterSpacing: "3px",
            px: 5,
            mb: 2,
            textDecoration: "underline",
          }}
        >
          OUR TARGET
        </Typography>
        <Typography sx={{ letterSpacing: "1px", lineHeight: "30px" }}>
          এ,কে,স্কুল এন্ড কলেজ ঢাকা যাত্রাবাড়ী সংলগ্ন দনিয়া এলাকার একটি
          ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। এই প্রতিষ্ঠানে প্রথম শ্রেণী থেকে দ্বাদশ
          শ্রেণী পর্যন্ত শিক্ষা কার্যক্রম পরিচালিত হয়। এতে প্রায় তিনশত শিক্ষক,
          কর্মকর্তা ও কর্মচারী কর্মরত এবং বর্তমানে প্রায় দশ হাজার শিক্ষার্থী
          অধ্যয়নরত রয়েছে। এ,কে,স্কুল এন্ড কলেজ প্রতিষ্ঠিত হয় ১৯৭১ সালে।
          প্রতিষ্ঠালগ্ন থেকেই এ প্রতিষ্ঠানে সাফল্যের ধারা অব্যাহত। বর্তমান
          অধ্যক্ষ দায়িত্ব নেয়ার পর এ প্রতিষ্ঠানটি দেশের শীর্ষ স্থানীয়
          প্রতিষ্ঠানে রুপান্তরিত হয়। এ প্রতিষ্ঠানের শিক্ষার্থীরা দেশে ও বিদেশে
          সরকারি-বেসরকারি উচ্চ-পদস্থ কর্মকর্তা হিসেবে সুনামের সাথে দায়িত্ব পালন
          করছে। এ সাফল্যের অংশীদার আমাদের এক ঝাঁক তরুণ মেধাবী শিক্ষকমণ্ডলী। তারা
          সবসময় শিক্ষার্থীদের আলোকিত মানুষ গড়তে নিরন্তর প্রচেষ্টা চালিয়ে আসছেন।
          বিদ্যালয়ের শিক্ষা কার্যক্রমের সাথে সহশিক্ষা কার্যক্রমও সমান গুরুত্ব
          পেয়ে থাকে। বার্ষিক খেলাধুলা, বনভোজন, সাংস্কৃতিক অনুষ্ঠান এবং শহীদ
          দিবস, বিজয় দিবস যথাযোগ্য মর্যাদায় উদযাপন করা হয়। এতে শিক্ষার্থীদের
          দেশাত্মবোধ জাগ্রত হওয়ার পাশাপাশি সামাজিক মূল্যবোধ গঠনে সহায়তা করে এবং
          সুশৃঙ্খলভাবে সুন্দর ভবিষ্যৎ নির্মাণে সহায়ক ভূমিকা পালন করে।
        </Typography>
        <Grid container columnSpacing={10} mt={5} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "3px",
                textAlign: "start",
                mb: 1,
              }}
            >
              স্কুলের বৈশিষ্ট্য ও সুবিধাসমূহ
            </Typography>
            <Divider sx={{ width: { md: "55%", xs: "85%" } }}></Divider>
            <Typography
              sx={{
                mt: 5,
                letterSpacing: "1px",
                lineHeight: "40px",
                textAlign: { xs: "start" },
              }}
            >
              •দক্ষ, অভিজ্ঞ ও সৃজনশীল পদ্ধতিতে প্রশিক্ষণপ্রাপ্ত অধ্যাপকমণ্ডলী
              কর্তৃক ক্লাস পরিচালিত হয়। <br></br>•সর্বাধিক ক্লাস ও পরীক্ষা
              গ্রহণ। পূর্বপরিকল্পনা অনুযায়ী শ্রেণীকক্ষে পাঠদান। <br></br>
              •লেখাপড়ার পাশাপাশি ছাত্রীদের বিনোদনমূলক শিক্ষা সফরের সুযোগ।
              <br></br>
              •মেধাবৃত্তি প্রদান। <br></br>•শিক্ষার্থীদের প্রাইভেট পড়তে হয় না।
              <br></br>
              •ক্লাস এ কোন বিষয় না বুঝলে অতিরিক্ত ক্লাস এর মাধ্যমে স্পেশাল
              কেয়ার। <br></br>•Auto SMS এর মাধ্যমে অভিভাবকদের information
              প্রদান। অত্যাধুনিক practical ল্যাব। <br></br>•কৃতিত্ব এর স্বীকৃতি
              সরূপ শিক্ষার্থীদের পুরস্কৃত করা। <br></br>•গরীব ও মেধাবী ছাত্রীদের
              সরকারী উপবৃত্তি প্রদানের সু-ব্যবস্থা রয়েছে।
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Slider {...settings}>
              <div>
                <h3 style={{ textAlign: "start", textDecoration: "underline" }}>
                  সভাপতি মহোদয়ের বাণী
                </h3>
                <p
                  style={{
                    textAlign: "start",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    height: "70vh",
                    paddingTop: "5px",
                    lineHeight: "30px",
                    letterSpacing: "1px",
                    paddingLeft: "2px",
                    paddingRight: "2px",
                  }}
                >
                  <img
                    src={img}
                    alt="Pineapple"
                    style={{
                      width: "170px",
                      height: "170px",
                      marginLeft: "15px",
                      float: "right",
                      border: "3px solid white",
                    }}
                  ></img>
                  সমস্ত প্রশংসা মহান স্রস্টার। যিনি মানব জাতিকে আশরাফুল মাখলুকাত
                  হিসেবে সৃষ্টি করেছেন এবং স্রিজনি ক্ষমতা দান করেছেন। “এ, কে
                  স্কুল এন্ড কলেজ” বাংলাদেশের শ্রেষ্ঠ বিদ্যাপীঠগুলোর মধ্যে
                  অন্যতম। আমরা বৃহৎ জনগোষ্ঠীর কোমল মোতি শিক্ষার্থীর এক ক্ষুদ্র
                  অংশকে নিয়ে কালের খেয়াই এগিয়ে যাচ্ছি, মানুষকে মানবসম্পদে পরিণত
                  করার মহান ব্রত সামনে রেখে। বাংলাদেশ সরকারের আরোপিত পাঠ্যক্রম
                  অনুসরণ করে ভবিষ্যতের সুনাগরিক গড়ার প্রয়াসে উত্তরোত্তর সমৃদ্ধির
                  পথে এগিয়ে যাচ্ছে আমাদের বিদ্যাপীঠ। “ দিন বদলের বইছে হাওয়া,
                  শিক্ষা আমাদের প্রথম চাওয়া”। বিশ্বে আমাদের অবস্থান তৈরির জন্যে
                  প্রথমেই প্রয়োজন শিক্ষা। অর্থনৈতিক প্রবৃদ্ধি, সুশাসন, শক্তিশালী
                  প্রতিষ্ঠান ও সমৃদ্ধশালী দেশ গড়ে তোলার ক্ষেত্রে শিক্ষা তথা
                  মানসম্পন্ন শিক্ষার কোন বিকল্প নাই। কদমতলি থানার শিক্ষার্থীদের
                  মানসম্মত শিক্ষা নিশ্চিত করার প্রয়াসে এ,কে, স্কুল ১৯৭১ সালে
                  প্রতিষ্ঠিত হয়। দেশ গঠনে নারী শিক্ষার গুরুত্ব অনুধাবন করে
                  এলাকাবাসীর দীর্ঘদিনের দাবির প্রেক্ষিতে ১৯৯৫ সনে প্রতিষ্ঠানটিতে
                  কেবল মেয়েদের জন্যে কলেজ ভবন প্রসারিত হয়। অভিজ্ঞ,
                  প্রশিক্ষণপ্রাপ্ত অধ্যাপকমণ্ডলীর ঐকান্তিক প্রচেষ্টা,
                  শিক্ষার্থীদের নিরলস পরিশ্রম, সম্মানিত অভিভাবকগণের সহযোগিতা এবং
                  সর্বোপরি দক্ষ গভর্নিং বডির উদ্যোগের কারণে এ, কে, স্কুল অ্যান্ড
                  কলেজ আজ মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ডে দেশসেরা শিক্ষা
                  প্রতিষ্ঠানসমূহের অন্যতম শিক্ষা প্রতিষ্ঠানে পরিণত হয়েছে। শুরু
                  থেকেই কলেজ শাখার ফলাফল আশাব্যাঞ্জক ও সমৃদ্ধ। এরই ধারাবাহিকতায়
                  ২০১০ সন থেকে শিক্ষার্থীরা বোর্ড মেধাবৃত্তিও অর্জন করে আসছে।
                  অত্র প্রতিষ্ঠানে কলেজ শাখায় ভর্তি হয়ে একজন নবীন শিক্ষার্থী
                  আমাদের কর্মকাণ্ডে অংশগ্রহণ করবে- এটাই আমাদের প্রত্যাশা। এ
                  লক্ষে কলেজ শাখার একাদশ শ্রেণীতে ভর্তি ইচ্ছুক নবিন
                  শিক্ষার্থীদের প্রতি রইল আমার আগাম শুভেচ্ছা। আল্লাহ রাব্বুল
                  আলামিন আমাদের সহায় হওন। জয় বাংলা-জয় বঙ্গবন্ধু, বাংলাদেশ
                  চিরজীবী হোক।সমস্ত প্রশংসা মহান স্রস্টার। যিনি মানব জাতিকে
                  আশরাফুল মাখলুকাত হিসেবে সৃষ্টি করেছেন এবং স্রিজনি ক্ষমতা দান
                  করেছেন। “এ, কে স্কুল এন্ড কলেজ” বাংলাদেশের শ্রেষ্ঠ
                  বিদ্যাপীঠগুলোর মধ্যে অন্যতম। আমরা বৃহৎ জনগোষ্ঠীর কোমল মোতি
                  শিক্ষার্থীর এক ক্ষুদ্র অংশকে নিয়ে কালের খেয়াই এগিয়ে যাচ্ছি,
                  মানুষকে মানবসম্পদে পরিণত করার মহান ব্রত সামনে রেখে। বাংলাদেশ
                  সরকারের আরোপিত পাঠ্যক্রম অনুসরণ করে ভবিষ্যতের সুনাগরিক গড়ার
                  প্রয়াসে উত্তরোত্তর সমৃদ্ধির পথে এগিয়ে যাচ্ছে আমাদের বিদ্যাপীঠ।
                  “ দিন বদলের বইছে হাওয়া, শিক্ষা আমাদের প্রথম চাওয়া”। বিশ্বে
                  আমাদের অবস্থান তৈরির জন্যে প্রথমেই প্রয়োজন শিক্ষা। অর্থনৈতিক
                  প্রবৃদ্ধি, সুশাসন, শক্তিশালী প্রতিষ্ঠান ও সমৃদ্ধশালী দেশ গড়ে
                  তোলার ক্ষেত্রে শিক্ষা তথা মানসম্পন্ন শিক্ষার কোন বিকল্প নাই।
                  কদমতলি থানার শিক্ষার্থীদের মানসম্মত শিক্ষা নিশ্চিত করার
                  প্রয়াসে এ,কে, স্কুল ১৯৭১ সালে প্রতিষ্ঠিত হয়। দেশ গঠনে নারী
                  শিক্ষার গুরুত্ব অনুধাবন করে এলাকাবাসীর দীর্ঘদিনের দাবির
                  প্রেক্ষিতে ১৯৯৫ সনে প্রতিষ্ঠানটিতে কেবল মেয়েদের জন্যে কলেজ ভবন
                  প্রসারিত হয়। অভিজ্ঞ, প্রশিক্ষণপ্রাপ্ত অধ্যাপকমণ্ডলীর ঐকান্তিক
                  প্রচেষ্টা, শিক্ষার্থীদের নিরলস পরিশ্রম, সম্মানিত অভিভাবকগণের
                  সহযোগিতা এবং সর্বোপরি দক্ষ গভর্নিং বডির উদ্যোগের কারণে এ, কে,
                  স্কুল অ্যান্ড কলেজ আজ মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ডে
                  দেশসেরা শিক্ষা প্রতিষ্ঠানসমূহের অন্যতম শিক্ষা প্রতিষ্ঠানে
                  পরিণত হয়েছে। শুরু থেকেই কলেজ শাখার ফলাফল আশাব্যাঞ্জক ও সমৃদ্ধ।
                  এরই ধারাবাহিকতায় ২০১০ সন থেকে শিক্ষার্থীরা বোর্ড মেধাবৃত্তিও
                  অর্জন করে আসছে। অত্র প্রতিষ্ঠানে কলেজ শাখায় ভর্তি হয়ে একজন
                  নবীন শিক্ষার্থী আমাদের কর্মকাণ্ডে অংশগ্রহণ করবে- এটাই আমাদের
                  প্রত্যাশা। এ লক্ষে কলেজ শাখার একাদশ শ্রেণীতে ভর্তি ইচ্ছুক নবিন
                  শিক্ষার্থীদের প্রতি রইল আমার আগাম শুভেচ্ছা। আল্লাহ রাব্বুল
                  আলামিন আমাদের সহায় হওন। জয় বাংলা-জয় বঙ্গবন্ধু, বাংলাদেশ
                  চিরজীবী হোক।
                  <h4
                    style={{ textAlign: "start", textDecoration: "underline" }}
                  >
                    আলহাজ্ব মশিউর রহমান মোল্লা সজল <br></br>সভাপতি, গভর্নিং বডি
                    <br></br>
                    এ.কে. স্কুল অ্যান্ড কলেজ
                  </h4>
                </p>
              </div>
              <div>
                <h3 style={{ textAlign: "start", textDecoration: "underline" }}>
                  অধ্যক্ষের বাণী
                </h3>
                <p
                  style={{
                    textAlign: "start",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    height: "70vh",
                    paddingTop: "5px",
                    lineHeight: "30px",
                    letterSpacing: "1px",
                    paddingLeft: "2px",
                    paddingRight: "2px",
                  }}
                >
                  <img
                    src={haq}
                    alt="Pineapple"
                    style={{
                      width: "170px",
                      height: "170px",
                      marginLeft: "15px",
                      float: "right",
                      border: "3px solid white",
                    }}
                  ></img>
                  “পাথরে যেমন আগুন লুকানো। মৃত্তিকার গভীরে পানি লুকানো। তেমনি
                  প্রত্যেক শিক্ষার্থীর মধ্যে প্রতিভা লুকান”। এই প্রতিভাকে যে
                  শিক্ষক এবং যে শিক্ষা প্রতিষ্ঠান জাগিয়ে তুলতে পারে তিনিই সার্থক
                  শিক্ষক এবং সেই প্রতিষ্ঠানটি ই শ্রেষ্ঠ প্রতিষ্ঠান। শুধু গোল্ডেন
                  A+ নয়, গোল্ডেন A+ এর সাথে সাথে আপনার সন্তান গোল্ডেন মেধা নিয়ে
                  প্রকৃত পক্ষেই শিক্ষার আলোকে আলকিত হোলও কিনা তা মূল্যায়নের দাবি
                  আপনার কাছে। আমরা প্রচার আর চাকচিক্যে বিশ্বাসী নই, কাজে
                  বিশ্বাসী। আমাদের বিগত দিনের পরীক্ষার ফলাফল এবং ছাত্রছাত্রীদের
                  মেডিকেল, ইঞ্জিনিয়ারিং ও ইউনিভার্সিটিতে ভর্তিসহ সরকারি-বেসরকারি
                  প্রতিষ্ঠানে উচ্চ মর্যাদা এবং সম্মানজনক চাকুরিতে যোগ্য অবস্থানই
                  তার প্রমাণ। আমরা আমাদের কলেজকে আরও উচ্চমাত্রায় উন্নীত করতে চাই
                  যাতে অত্র এলাকার কোন মেয়েকে দূরের কোন শিক্ষা প্রতিষ্ঠানে যানজট
                  পেরিয়ে যেতে না হয়। এ, কে, স্কুল অ্যান্ড কলেজের একাদশ –দ্বাদশ
                  শ্রেণিতে বিজ্ঞান-মানবিক-ব্যবসায় শিক্ষা তিনটি বিভাগই রয়েছে।
                  অভিজ্ঞ অধ্যাপক মণ্ডলী এবং গভর্নিং বডির সুপরিচালনায় বিশেষ করে
                  মাননীয় সভাপতি, ঢাকা- ৫ আসনের সাংসদ শিক্ষাদরদী জ্ঞানতাপস জনাব
                  আলহাজ্ব হাবিবুর রহমান মোল্লা অত্র প্রতিষ্ঠানে শিক্ষার সুষ্ঠু
                  পরিবেশ নিশ্চিত করায় ইতোমধ্যেই তা সুধিজনের দৃষ্টি আকর্ষণে সক্ষম
                  হয়েছে। সম্মানিত এলাকাবাসী, অভিভাবকমণ্ডলী ও প্রিয় ছাত্রীবৃন্দ
                  কোন ব্যবসায়িক উদ্দেশ্যে নয় বরং সম্পূর্ণ শিক্ষাসেবার মাধ্যমে
                  উন্নত ফলাফল নিশ্চিত করার পাশাপাশি শিক্ষার্থীদের সুসন্তান,
                  সুনাগরিক হিসেবে গড়ে তোলার মানসে কলেজ শাখায় ছাত্রী ভর্তির জন্য
                  সবার আন্তরিক সহযোগিতা ও দোয়া কামনা করছি। পরিশেষে এ, কে, স্কুল
                  অ্যান্ড কলেজের প্রতিষ্ঠালগ্ন থেকে দাতা পরিবারসহ যে সকল
                  শিক্ষানুরাগী ব্যক্তিবর্গ যুক্ত ছিলেন তাদের প্রতি গভীর শ্রদ্ধা
                  ও কৃতজ্ঞতা জ্ঞাপন করছি। অত্র প্রতিষ্ঠানের অগ্রযাত্রা অব্যাহত
                  থাকুক ও শিক্ষার্থীরা সুশিক্ষায় শিক্ষিত হয়ে দেশের সেবায় নিয়োজিত
                  হয়ে স্বপ্নের সমান বড় হোক সৃষ্টিকর্তার কাছে এ কামনা রইল।
                  <h4
                    style={{ textAlign: "start", textDecoration: "underline" }}
                  >
                    আলহাজ্ব মোঃ ফজলুল হক <br></br>ভারপ্রাপ্ত অধ্যক্ষ <br></br>এ,
                    কে, স্কুল এন্ড
                  </h4>
                </p>
              </div>
              {/* <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div> */}
            </Slider>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default History;
