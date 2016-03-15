import React from 'react';
import KeyboardKey from '../KeyboardKey/component';

export default class Keyboard extends React.Component {
	render () {
		return (
			<div className="keyboard-block">
				<div className="keyboard-row">
					<KeyboardKey which="0xc0">
						<span>~</span>
						<span>&#96;</span>
					</KeyboardKey>
					<KeyboardKey which="0x31">
						<span>!</span>
						<span>1</span>
					</KeyboardKey>
					<KeyboardKey which="0x32">
						<span>@</span>
						<span>2</span>
					</KeyboardKey>
					<KeyboardKey which="0x33">
						<span>#</span>
						<span>3</span>
					</KeyboardKey>
					<KeyboardKey which="0x34">
						<span>$</span>
						<span>4</span>
					</KeyboardKey>
					<KeyboardKey which="0x35">
						<span>%</span>
						<span>5</span>
					</KeyboardKey>
					<KeyboardKey which="0x36">
						<span>^</span>
						<span>6</span>
					</KeyboardKey>
					<KeyboardKey which="0x37">
						<span>&amp;</span>
						<span>7</span>
					</KeyboardKey>
					<KeyboardKey which="0x38">
						<span>*</span>
						<span>8</span>
					</KeyboardKey>
					<KeyboardKey which="0x39">
						<span>(</span>
						<span>9</span>
					</KeyboardKey>
					<KeyboardKey which="0x30">
						<span>)</span>
						<span>0</span>
					</KeyboardKey>
					<KeyboardKey which="0xbd">
						<span>_</span>
						<span>-</span>
					</KeyboardKey>
					<KeyboardKey which="0xbb">
						<span>+</span>
						<span>=</span>
					</KeyboardKey>
					<KeyboardKey which="0x08" width="2">
						<span>&larr;</span>
					</KeyboardKey>
				</div>
				<div className="keyboard-row">
					<KeyboardKey which="0x09" width="1.5">
						<span>Tab</span>
					</KeyboardKey>
					<KeyboardKey which="0x51">
						<span>Q</span>
					</KeyboardKey>
					<KeyboardKey which="0x57">
						<span>W</span>
					</KeyboardKey>
					<KeyboardKey which="0x45">
						<span>E</span>
					</KeyboardKey>
					<KeyboardKey which="0x52">
						<span>R</span>
					</KeyboardKey>
					<KeyboardKey which="0x54">
						<span>T</span>
					</KeyboardKey>
					<KeyboardKey which="0x59">
						<span>Y</span>
					</KeyboardKey>
					<KeyboardKey which="0x55">
						<span>U</span>
					</KeyboardKey>
					<KeyboardKey which="0x49">
						<span>I</span>
					</KeyboardKey>
					<KeyboardKey which="0x4f">
						<span>O</span>
					</KeyboardKey>
					<KeyboardKey which="0x50">
						<span>P</span>
					</KeyboardKey>
					<KeyboardKey which="0xdb">
						<span>&#123;</span>
						<span>[</span>
					</KeyboardKey>
					<KeyboardKey which="0xdd">
						<span>}</span>
						<span>]</span>
					</KeyboardKey>
					<KeyboardKey which="0xdc" width="1.5">
						<span>|</span>
						<span>\</span>
					</KeyboardKey>
				</div>
				<div className="keyboard-row">
					<KeyboardKey which="0x14" width="1.75">
						<span>Caps<br />Lock</span>
					</KeyboardKey>
					<KeyboardKey which="0x41">
						<span>A</span>
					</KeyboardKey>
					<KeyboardKey which="0x53">
						<span>S</span>
					</KeyboardKey>
					<KeyboardKey which="0x44">
						<span>D</span>
					</KeyboardKey>
					<KeyboardKey which="0x46">
						<span>F</span>
					</KeyboardKey>
					<KeyboardKey which="0x47">
						<span>G</span>
					</KeyboardKey>
					<KeyboardKey which="0x48">
						<span>H</span>
					</KeyboardKey>
					<KeyboardKey which="0x4a">
						<span>J</span>
					</KeyboardKey>
					<KeyboardKey which="0x4b">
						<span>K</span>
					</KeyboardKey>
					<KeyboardKey which="0x4c">
						<span>L</span>
					</KeyboardKey>
					<KeyboardKey which="0xba">
						<span>:</span>
						<span>;</span>
					</KeyboardKey>
					<KeyboardKey which="0xde">
						<span>&quot;</span>
						<span>&apos;</span>
					</KeyboardKey>
					<KeyboardKey which="0x0d" width="2.25" location="0">
						<span>Enter</span>
					</KeyboardKey>
				</div>
				<div className="keyboard-row">
					<KeyboardKey which="0x10" width="2.25" location="1">
						<span>Shift</span>
						<span>&#8679;</span>
					</KeyboardKey>
					<KeyboardKey which="0x5a">
						<span>Z</span>
					</KeyboardKey>
					<KeyboardKey which="0x58">
						<span>X</span>
					</KeyboardKey>
					<KeyboardKey which="0x43">
						<span>C</span>
					</KeyboardKey>
					<KeyboardKey which="0x56">
						<span>V</span>
					</KeyboardKey>
					<KeyboardKey which="0x42">
						<span>B</span>
					</KeyboardKey>
					<KeyboardKey which="0x4e">
						<span>N</span>
					</KeyboardKey>
					<KeyboardKey which="0x4d">
						<span>M</span>
					</KeyboardKey>
					<KeyboardKey which="0xbc">
						<span>&lt;</span>
						<span>,</span>
					</KeyboardKey>
					<KeyboardKey which="0xbe">
						<span>&gt;</span>
						<span>.</span>
					</KeyboardKey>
					<KeyboardKey which="0xbf">
						<span>?</span>
						<span>/</span>
					</KeyboardKey>
					<KeyboardKey which="0x10" width="2.75" location="2">
						<span>Shift</span>
						<span>&#8679;</span>
					</KeyboardKey>
				</div>
				<div className="keyboard-row">
					<KeyboardKey which="0x11" width="1.25" location="1">
						<span>Ctrl</span>
					</KeyboardKey>
					<KeyboardKey which="0x5b" width="1.25" location="1">
						<span>OS</span>
					</KeyboardKey>
					<KeyboardKey which="0x12" width="1.25" location="1">
						<span>Alt</span>
					</KeyboardKey>
					<KeyboardKey which="0x20" width="6.25"></KeyboardKey>
					<KeyboardKey which="0x12" width="1.25" location="2">
						<span>Alt</span>
					</KeyboardKey>
					<KeyboardKey which="0x5c" width="1.25" location="2">
						<span>OS</span>
					</KeyboardKey>
					<KeyboardKey which="0x5d" width="1.25">
						<span>Menu</span>
					</KeyboardKey>
					<KeyboardKey which="0x11" width="1.25" location="2">
						<span>Ctrl</span>
					</KeyboardKey>
				</div>
			</div>
		);
	}
}
