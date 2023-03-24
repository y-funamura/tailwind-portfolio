// 各種ライブラリのインポート
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

// 表示するデータを配列として定義
export type Data = {
  skill: string;
  value: number;
};

// type datas = Data[];
type DataProps = { datas: Data[]; stroke: string; fill: string };

// Chartコンポーネントの定義
const RadarChartSkill = (props: DataProps) => {
  // export const RadarChartSkill: React.FC<DataProps> = (props) => {
  return (
    <RadarChart // レーダーチャート全体の設定を記述
      cx="50%" // 要素の左端とチャートの中心点との距離(0にするとチャートの左半分が隠れる)
      cy="50%" // 要素の上部とチャートの中心点との距離(0にするとチャートの上半分が隠れる)
      outerRadius={80} // レーダーチャート全体の大きさ
      width={450} // レーダーチャートが記載される幅(この幅よりチャートが大きい場合、はみ出た箇所は表示されない)
      height={250} // レーダーチャートが記載される高さ
      data={props.datas} // 表示対象のデータ
    >
      {/* レーダーチャートの蜘蛛の巣のような線 */}
      <PolarGrid />
      {/* 軸を決める項目(サンプルでいう数学や歴史) */}
      <PolarAngleAxis dataKey="skill" />
      {/* 目安となる数値が表示される線を指定  */}
      <PolarRadiusAxis
        angle={90} // 中心点から水平を0°とした時の角度 垂直にしたいなら90を指定
        domain={[0, 5]} // リストの１番目の要素が最小値、2番目の要素が最大値
        tickCount={6}
      />
      {/* レーダーを表示 */}
      <Radar
        name="aaa" // そのチャートが誰のデータか指定(チャート下にここで指定した値が表示される)
        dataKey="value" // 表示する値と対応するdata内のキー
        // stroke="#fc4747" // レーダーの外枠の色
        // fill="#8884d8" // レーダー内の色
        stroke={props.stroke} // レーダーの外枠の色
        fill={props.fill} // レーダー内の色
        fillOpacity={0.6} // レーダー内の色の濃さ(1にすると濃さMAX)
      />
      {/* <Legend width={500} /> */}
      {/* <ToolTip /> */}
    </RadarChart>
  );
};
export default RadarChartSkill;
