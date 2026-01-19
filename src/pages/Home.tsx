import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Video,
  Users,
  MessageCircle,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Laptop,
  Smartphone,
  FileText,
  Heart,
  Star,
  ChevronRight,
  Check,
  X,
} from "lucide-react";

/*
 * Design: Warm & Approachable
 * Colors: Beige, dusty pink, ivory / Coral CTA
 * Target: 25-39歳女性、会社員・パート、動画編集未経験
 * Goal: 無料個別相談への申し込み
 */

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (index: number) => {
    setCheckedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-beige">
        <div className="container flex items-center justify-between h-16 md:h-18">
          <a href="#" className="text-lg md:text-xl text-warm-brown font-medium">
            動画編集スクール
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#curriculum" className="text-warm-gray hover:text-coral transition-colors">カリキュラム</a>
            <a href="#support" className="text-warm-gray hover:text-coral transition-colors">サポート</a>
            <a href="#price" className="text-warm-gray hover:text-coral transition-colors">料金</a>
            <a href="#faq" className="text-warm-gray hover:text-coral transition-colors">よくある質問</a>
          </nav>
          <Button className="bg-coral hover:bg-coral/90 text-white rounded-full px-5 py-2 text-sm font-medium shadow-soft">
            無料相談を予約
          </Button>
        </div>
      </header>

      {/* S1: Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dusty-pink-light/30 to-ivory -z-10" />

        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <p className="font-accent text-2xl md:text-3xl text-coral mb-4">For Working Women</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-warm-brown font-medium leading-tight mb-6">
                仕事終わりの2時間で、<br />
                <span className="text-coral">"副業できる私"</span>になる<br />
                動画編集スクール
              </h1>
              <p className="text-warm-gray text-base md:text-lg leading-relaxed mb-4">
                3ヶ月で、縦型動画2本＋YouTube動画2本の作品と<br className="hidden md:block" />
                "副業デビューの一歩"を一緒に作ります。
              </p>
              <div className="flex flex-wrap gap-3 mb-8 text-sm text-warm-brown">
                <span className="bg-beige px-3 py-1.5 rounded-full">25〜39歳</span>
                <span className="bg-beige px-3 py-1.5 rounded-full">会社員・パート</span>
                <span className="bg-beige px-3 py-1.5 rounded-full">完全未経験OK</span>
              </div>
              <Button
                size="lg"
                className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-lg font-medium shadow-soft-lg group"
              >
                無料個別相談の空き枠を見る
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-soft-lg">
                  <img
                    src="/VideoSchool/images/hero-new.jpg"
                    alt="自宅で動画編集を学ぶ女性"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-soft-lg hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-dusty-pink-light rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-coral" />
                    </div>
                    <div>
                      <p className="text-sm text-warm-gray">1日の学習時間</p>
                      <p className="text-lg text-warm-brown font-medium">約2時間〜</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* S2: Concerns Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium mb-4">
              こんな<span className="font-accent text-coral text-3xl md:text-4xl lg:text-5xl">"モヤモヤ"</span>、抱えていませんか？
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl mx-auto space-y-4 mb-12">
            {[
              "副業に興味はあるけど、何から始めればいいか分からない",
              "動画編集に挑戦してみたいけど、一人で続けられる自信がない",
              "スキルを身につけて、少しでもいいから自分で稼いでみたい",
              "毎日が仕事と家の往復で、何か新しいことを始めるきっかけが欲しい",
            ].map((concern, index) => (
              <label
                key={index}
                className="flex items-start gap-4 p-4 bg-dusty-pink-light/30 rounded-2xl cursor-pointer hover:bg-dusty-pink-light/50 transition-colors"
                onClick={() => toggleCheck(index)}
              >
                <input
                  type="checkbox"
                  checked={checkedItems.includes(index)}
                  onChange={() => {}}
                  className="concern-checkbox mt-0.5 shrink-0"
                />
                <span className="text-warm-brown leading-relaxed">{concern}</span>
              </label>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <div className="bg-beige/50 rounded-3xl p-6 md:p-8">
              <p className="text-warm-brown leading-relaxed">
                <span className="font-accent text-xl text-coral">その気持ち、とてもよく分かります。</span><br /><br />
                やりたい気持ちはあるのに、仕事や家事で毎日が終わっていく。<br />
                そんな"モヤモヤ"を抱えたまま、半年、一年と過ぎていませんか？<br /><br />
                でも、<strong>それはあなただけではありません。</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S3: Concept Section */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="font-accent text-2xl md:text-3xl text-coral mb-6">Our Concept</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium leading-relaxed mb-10">
              会社に縛られず、<br />
              <span className="text-coral">"自分のペースで稼ぐ力"</span>を持つ<br />
              女性を増やすための、動画編集スクールです。
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="flex items-center gap-2 mb-3">
                  <X className="h-5 w-5 text-warm-gray" />
                  <span className="text-warm-gray font-medium">私たちは、こうではありません</span>
                </div>
                <p className="text-warm-brown leading-relaxed text-sm">
                  "3ヶ月で月30万！"と煽るようなスクールではありません。何十万円ものローンを組ませたり、厳しい課題で追い込むこともしません。
                </p>
              </div>
              <div className="bg-dusty-pink-light/50 rounded-2xl p-6 shadow-soft border-2 border-coral/20">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="h-5 w-5 text-coral" />
                  <span className="text-coral font-medium">私たちが目指すこと</span>
                </div>
                <p className="text-warm-brown leading-relaxed text-sm">
                  仕事や家事、推し活とも両立しながら、"自分のお金"を自分のスキルで生み出せる。私たちは、そんな女性を一人でも多く増やすための<strong>「安心できる場所」</strong>です。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S4: Before/After Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="font-accent text-xl text-coral mb-2">Transformation</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium">
              3ヶ月後、あなたはこう変わる
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            {/* Before/After Image */}
            <div className="rounded-3xl overflow-hidden shadow-soft-lg mb-10">
              <img
                src="/VideoSchool/images/before-after.jpg"
                alt="ビフォーアフター：会社員からフリーランスへ"
                className="w-full h-auto"
              />
            </div>

            {/* Before */}
            <div className="bg-beige/50 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-warm-gray text-white text-sm font-medium px-3 py-1 rounded-full">Before</span>
                <span className="text-warm-gray">副業未経験、動画編集も初めて</span>
              </div>
              <p className="text-warm-brown italic">"何からやればいいか分からない…"</p>
            </div>

            {/* After - 3 levels */}
            <div className="space-y-4">
              {[
                {
                  level: "最低ライン",
                  title: "スキルが身につく",
                  description: "縦型ショート2本＋YouTube動画2本の作品が完成し、いつでも見せられるポートフォリオが手に入る。",
                  color: "bg-dusty-pink-light",
                },
                {
                  level: "標準ライン",
                  title: "行動できる私になる",
                  description: "多くの方が、3ヶ月の間に『応募や声かけを10件以上』行い、副業にチャレンジする準備が整う。",
                  color: "bg-dusty-pink-light/70",
                },
                {
                  level: "成功ライン",
                  title: "最初の一歩を踏み出す",
                  description: "なかには、3ヶ月の間に1〜5万円ほどの副業収入を得て、継続案件を受け始める方も。",
                  note: "※成果には個人差があります。",
                  color: "bg-coral/10 border-2 border-coral/30",
                },
              ].map((item, index) => (
                <div key={index} className={`${item.color} rounded-2xl p-6`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-coral text-white text-sm font-medium px-3 py-1 rounded-full">After</span>
                    <span className="text-coral font-medium">【{item.level}】{item.title}</span>
                  </div>
                  <p className="text-warm-brown leading-relaxed">
                    {item.description}
                    {item.note && <span className="text-sm text-warm-gray ml-1">{item.note}</span>}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* S5: Curriculum Section */}
      <section id="curriculum" className="py-16 md:py-24 bg-ivory">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="font-accent text-xl text-coral mb-2">Curriculum</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium mb-4">
              未経験からでも安心！<br className="md:hidden" />ゴールから逆算した8週間プログラム
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-dusty-pink" />

              {[
                {
                  week: "1〜2週目",
                  title: "基礎 ＆ 縦型動画",
                  description: "スマホ＆CapCutで、縦型ショート動画を1本作り切ります。",
                  icon: Smartphone,
                },
                {
                  week: "3〜5週目",
                  title: "実践 ＆ YouTube動画",
                  description: "YouTube動画の企画・台本から編集・サムネまでを通して1本仕上げます。",
                  icon: Video,
                },
                {
                  week: "6〜7週目",
                  title: "応用 ＆ ポートフォリオ",
                  description: "あなたの『武器になる動画』を選び、ポートフォリオとして見せられる形に仕上げます。",
                  icon: Award,
                },
                {
                  week: "8週目",
                  title: "準備 ＆ 副業スタート",
                  description: "出品文・プロフィール・営業文を一緒に整え、『3ヶ月後に何をするか』を具体的に決めます。",
                  icon: FileText,
                },
              ].map((phase, index) => (
                <div key={index} className="relative pl-16 md:pl-20 pb-10 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-3 md:left-5 top-0 w-6 h-6 md:w-8 md:h-8 bg-coral rounded-full flex items-center justify-center shadow-soft">
                    <phase.icon className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  </div>

                  <div className="bg-white rounded-2xl p-5 md:p-6 shadow-soft">
                    <span className="text-coral font-medium text-sm">{phase.week}</span>
                    <h3 className="text-lg md:text-xl text-warm-brown font-medium mt-1 mb-2">{phase.title}</h3>
                    <p className="text-warm-gray leading-relaxed text-sm md:text-base">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* S6: Support Section */}
      <section id="support" className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="font-accent text-xl text-coral mb-2">Support</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium">
              あなたが挫折しないための、<br className="md:hidden" />4つのサポート体制
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: "週1回のグループ講義",
                description: "仲間と一緒に学べる60分のオンライン講義（Zoom）。録画もあるので安心。",
              },
              {
                icon: MessageCircle,
                title: "24時間OKの質問チャット",
                description: "専用Slackで、分からないことはいつでも講師に質問できます。（平日24時間以内目安で回答）",
              },
              {
                icon: Award,
                title: "プロによる個別添削",
                description: "あなたのポートフォリオ用作品を『最大2本まで』、プロの講師が個別にフィードバックします。",
              },
              {
                icon: Heart,
                title: "卒業後も繋がれるコミュニティ",
                description: "卒業後も、月3,000円のオンライン部室で、仲間との情報交換や勉強会を続けられます。",
              },
            ].map((support, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-soft-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-dusty-pink-light rounded-2xl flex items-center justify-center mb-4">
                    <support.icon className="h-6 w-6 text-coral" />
                  </div>
                  <h3 className="text-lg text-warm-brown font-medium mb-2">{support.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{support.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Online class image */}
          <motion.div {...fadeInUp} className="mt-12 max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-soft-lg">
              <img
                src="/VideoSchool/images/online-class.jpg"
                alt="オンラインで一緒に学ぶ仲間たち"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* S7: Target Section */}
      <section className="py-16 md:py-24 bg-beige/30">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="font-accent text-xl text-coral mb-2">Who is this for?</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium">
              受講にあたってのご案内
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            {/* 向いている人 */}
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg text-coral font-medium mb-4 flex items-center gap-2">
                <Check className="h-5 w-5" />
                こんな方に向いています
              </h3>
              <ul className="space-y-3">
                {[
                  "副業で『まずは月1〜3万円』から堅実に始めたい方",
                  "動画編集は未経験だけど、コツコツ学ぶのは嫌いじゃない方",
                  "一人で学ぶより、仲間や講師と一緒の方が頑張れると思う方",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-warm-brown text-sm">
                    <CheckCircle2 className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S8: Testimonial Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="font-accent text-xl text-coral mb-2">Success Story</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium mb-2">
              3ヶ月で変わった、私のストーリー
            </h2>
            <p className="text-sm text-warm-gray">※これは、あなたかもしれない未来の物語です。</p>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <div className="bg-dusty-pink-light/30 rounded-3xl p-6 md:p-8">
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="/VideoSchool/images/student-story.jpg"
                    alt="Aさん"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-warm-brown font-medium">Aさん（29歳・事務職）</p>
                  <p className="text-sm text-warm-gray">フルタイム勤務</p>
                </div>
              </div>

              {/* Before */}
              <div className="bg-white rounded-2xl p-5 mb-4">
                <p className="text-sm text-warm-gray mb-2">Before</p>
                <p className="text-warm-brown leading-relaxed">
                  「フルタイム事務職で、帰宅後はスマホでSNSを見て終わる毎日。将来のために何かしたいけど、何をすればいいか分からず焦っていました。」
                </p>
              </div>

              {/* After */}
              <div className="bg-coral/10 rounded-2xl p-5 mb-6 border-2 border-coral/20">
                <p className="text-sm text-coral mb-2">After</p>
                <p className="text-warm-brown leading-relaxed">
                  「週3日・夜1時間の編集作業で、<strong className="text-coral">月1万5,000円の副収入を達成！</strong>今はそのお金を推し活の資金にしています。自分で稼いだお金で楽しむ時間は最高です！」
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-3">
                <p className="text-sm text-warm-gray font-medium">学習タイムライン</p>
                {[
                  { month: "1ヶ月目", text: "縦動画を1本完成！初めて動画を作り切る達成感に感動。" },
                  { month: "2ヶ月目", text: "YouTube動画も完成し、ポートフォリオを公開。" },
                  { month: "3ヶ月目", text: "勇気を出して応募し、初めての案件（5,000円）を獲得！" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-3">
                    <span className="text-xs text-coral font-medium bg-coral/10 px-2 py-1 rounded-full shrink-0">{item.month}</span>
                    <p className="text-sm text-warm-brown">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S9: Pricing Section */}
      <section id="price" className="py-16 md:py-24 bg-ivory">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="font-accent text-xl text-coral mb-2">Pricing</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium">
              料金プラン
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-lg mx-auto">
            <Card className="border-2 border-coral shadow-soft-lg overflow-hidden">
              <div className="bg-coral text-white text-center py-3">
                <p className="font-medium">全8週間 集中コース</p>
              </div>
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <p className="text-5xl md:text-6xl text-warm-brown font-medium">
                    98,000<span className="text-xl">円</span>
                  </p>
                  <p className="text-sm text-warm-gray mt-1">（税込）</p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-sm text-warm-gray font-medium">含まれるもの：</p>
                  {[
                    "週1回のグループ講義（全8回）",
                    "全カリキュラムの動画教材（視聴期限なし）",
                    "専用Slackでの質問サポート",
                    "個別フィードバック（最大2本まで）",
                    "ポートフォリオ作成サポート",
                    "卒業後のコミュニティ参加権利",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                      <span className="text-warm-brown text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-beige/50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-warm-gray mb-2">お支払い方法</p>
                  <p className="text-sm text-warm-brown">・クレジットカード<br />・銀行振込</p>
                  <p className="text-xs text-warm-gray mt-2">※カード会社の分割払いもご利用いただけます。</p>
                </div>

                <Button className="w-full bg-coral hover:bg-coral/90 text-white rounded-full py-6 text-lg font-medium shadow-soft-lg">
                  無料個別相談に申し込む
                </Button>
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-sm text-warm-gray">
                卒業後は、月額3,000円のオンライン部室で継続参加も可能です。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S10: Flow Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="font-accent text-xl text-coral mb-2">How to Start</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium">
              受講開始までの簡単5ステップ
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            {[
              { step: 1, title: "無料個別相談", description: "まずは無料個別相談にお申し込みください。（30〜45分／オンライン）不安なことは何でも聞いてください。" },
              { step: 2, title: "お申込み・決済", description: "内容にご納得いただけたら、専用フォームからお申込み・ご入金をお願いします。" },
              { step: 3, title: "キックオフ", description: "Slackへご招待し、教材の視聴をスタート。初回オリエンで学習の進め方を丁寧にご説明します。" },
              { step: 4, title: "8週間の受講", description: "週1回の講義と課題、質問サポートを活用し、あなたのペースで作品とポートフォリオを完成させます。" },
              { step: 5, title: "卒業", description: "卒業おめでとうございます！希望者はコミュニティプランで、引き続き一緒に頑張りましょう。" },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 md:gap-6 mb-6 last:mb-0">
                <div className="shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-coral text-white rounded-full flex items-center justify-center font-medium text-lg">
                    {item.step}
                  </div>
                  {index < 4 && (
                    <div className="w-0.5 h-full bg-dusty-pink mx-auto mt-2" style={{ minHeight: '40px' }} />
                  )}
                </div>
                <div className="bg-beige/30 rounded-2xl p-4 md:p-5 flex-1">
                  <h3 className="text-warm-brown font-medium mb-1">{item.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* S11: FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-beige/30">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="font-accent text-xl text-coral mb-2">FAQ</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium">
              よくあるご質問
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "動画編集は全くの未経験ですが、大丈夫ですか？",
                  a: "はい、大丈夫です！このコースは完全未経験の方を対象にしています。ただし、簡単なタイピングなど、基本的なPC操作ができることを前提としています。",
                },
                {
                  q: "本業や子育てと両立できるか心配です。",
                  a: "週5時間程度の学習時間を推奨していますが、講義は録画されますし、ご自身のペースで進められます。夜間や週末のスキマ時間を活用している方がほとんどです。",
                },
                {
                  q: "3ヶ月でいくら稼げるようになりますか？",
                  a: "『必ずいくら稼げる』という金額の保証はしておりません。当スクールは、稼ぐための『最初の一歩』を踏み出すスキルと自信を身につけることを目標としています。",
                },
                {
                  q: "ついていけなかった場合、どうなりますか？",
                  a: "まずは講師にご相談ください。課題の提出など、決められた条件を満たしている方には、学習計画の見直しなど個別のサポートを検討しますのでご安心ください。",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl px-5 border-0 shadow-soft"
                >
                  <AccordionTrigger className="text-left text-warm-brown hover:no-underline py-5 text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-warm-gray leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* S12: Instructor Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="font-accent text-xl text-coral mb-2">Instructor</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium">
              講師紹介
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              <div className="mx-auto md:mx-0">
                <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-soft-lg">
                  <img
                    src="/VideoSchool/images/instructor-new.jpg"
                    alt="講師"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl text-warm-brown font-medium mb-1">◯◯ ◯◯</h3>
                <p className="text-coral text-sm mb-4">女性向け動画編集・副業サポーター</p>

                <div className="space-y-2 mb-6">
                  {[
                    "元ブラック企業勤務の営業職",
                    "未経験から動画編集を学び、1年で独立",
                    "法人・個人問わず100本以上の動画制作実績",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-warm-gray">
                      <ChevronRight className="h-4 w-4 text-coral" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mt-8 bg-dusty-pink-light/40 rounded-3xl p-6 md:p-8 relative">
              <div className="absolute -top-3 left-8 bg-coral text-white text-sm px-4 py-1 rounded-full">
                講師からのメッセージ
              </div>
              <p className="text-warm-brown leading-loose mt-2 font-accent text-lg md:text-xl">
                「かつての私は、会社に縛られて心身ともに疲弊していました。そんな時に出会ったのが動画編集です。
                <br /><br />
                自分のスキルで、自分のペースで仕事を選べるようになったことで、心から人生が楽しいと思えるようになりました。
                <br /><br />
                この経験を活かし、過去の私と同じように悩んでいる女性が、自分らしく輝くための一歩を踏み出すお手伝いをしたい。そんな想いで、このスクールを立ち上げました。」
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-dusty-pink-light/50 to-ivory">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
            <p className="font-accent text-2xl md:text-3xl text-coral mb-4">Start Your Journey</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium mb-6">
              まずは無料個別相談で、<br />
              あなたの"モヤモヤ"を聞かせてください。
            </h2>
            <p className="text-warm-gray mb-8 leading-relaxed">
              「自分にできるか不安…」「何から始めればいい？」<br />
              そんな疑問や不安を、講師に直接相談できます。<br />
              無理な勧誘は一切ありませんので、お気軽にどうぞ。
            </p>
            <Button
              size="lg"
              className="bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-6 text-lg font-medium shadow-soft-lg group"
            >
              無料個別相談の空き枠を見る
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-warm-gray mt-4 flex items-center justify-center gap-2">
              <Calendar className="h-4 w-4" />
              所要時間：30〜45分 / オンライン開催
            </p>
          </motion.div>
        </div>
      </section>

      {/* S13: Footer / Policy */}
      <footer className="py-8 bg-beige/50 border-t border-beige">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Policy summary */}
            <div className="text-xs text-warm-gray mb-6 space-y-2">
              <p><strong>返金方針：</strong>お申込み後の自己都合によるキャンセル・返金はお受けしておりません。サービスの品質に重大な不備があった場合のみ、個別にご相談を承ります。</p>
              <p><strong>禁止事項：</strong>他の受講生への誹謗中傷・勧誘行為・教材の無断転載などがあった場合、強制的に退会いただくことがあります。</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-warm-brown font-medium">動画編集スクール</p>
              <nav className="flex flex-wrap justify-center gap-4 text-xs text-warm-gray">
                <a href="#" className="hover:text-coral transition-colors underline">利用規約</a>
                <a href="#" className="hover:text-coral transition-colors underline">プライバシーポリシー</a>
                <a href="#" className="hover:text-coral transition-colors">特定商取引法に基づく表記</a>
                <a href="#" className="hover:text-coral transition-colors">お問い合わせ</a>
              </nav>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-warm-gray">© 2025 動画編集スクール. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
