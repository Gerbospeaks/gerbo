import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import {
  Y as t,
  ae as n,
  init_jsx_runtime as r,
  init_npm_react_18_2 as i,
  npm_react_18_2_exports as a,
  p as o,
  pe as s,
  re as c,
  se as l,
  u,
  ue as d,
  x as f,
  ye as p,
} from "./react.Cd8yx0tA.mjs";
import {
  LayoutGroup as m,
  MotionConfigContext as h,
  init_framer_motion_5EXT2AMG as g,
  motion as _,
} from "./motion.BvMEYU-E.mjs";
import {
  ComponentViewportProvider as v,
  ControlType as y,
  Image2 as b,
  Instance as x,
  Link as S,
  RenderTarget as C,
  ResolveLinks as w,
  RichText as T,
  SmartComponentScopedContainer as E,
  addFonts as D,
  addPropertyControls as O,
  cx as k,
  fontStore as A,
  getFonts as j,
  getFontsFromSharedStyle as M,
  getLoadingLazyAtYPosition as N,
  getPropertyControls as P,
  init_framer_MRKGI23E as F,
  useActiveVariantCallback as I,
  useComponentViewport as L,
  useLocaleInfo as R,
  useRouter as ee,
  useSVGTemplate as z,
  useVariantState as B,
  withCSS as V,
} from "./framer.DERDik75.mjs";
var te,
  ne,
  H,
  re = e(() => {
    r(),
      i(),
      (te = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (ne = {
        ...te,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`,
      }),
      (H = t((e, t) => o(`div`, { style: ne, ref: t })));
  }),
  U,
  ie,
  ae,
  oe,
  se = e(() => {
    (ae = (e) => (
      U ||
        ((U = new Map([
          [
            `bold`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z`,
              }),
            ),
          ],
          [
            `duotone`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z`,
                opacity: `0.2`,
              }),
              e.createElement(`path`, {
                d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`,
              }),
            ),
          ],
          [
            `fill`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z`,
              }),
            ),
          ],
          [
            `light`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z`,
              }),
            ),
          ],
          [
            `regular`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z`,
              }),
            ),
          ],
          [
            `thin`,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(`path`, {
                d: `M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z`,
              }),
            ),
          ],
        ])),
        (ie = e.forwardRef((t, n) =>
          e.createElement(`g`, { ref: n, ...t }, U.get(t.weight)),
        ))),
      ie
    )),
      (oe = ae);
  });
function ce(e, t, n = ``, r, i) {
  if (t) return r;
  if (n == null || n?.length === 0) return null;
  let a = n.toLowerCase().replace(/-|\s/g, ``);
  var o;
  let s = (o = i[a]) ?? de(e, a);
  return s;
}
function le(e, t, n = ``, r, i) {
  let a = l(() => {
      if (n == null || n?.length === 0) return null;
      let t = n.toLowerCase().replace(/-|\s/g, ``);
      var r;
      let a = (r = i[t]) ?? de(e, t);
      return a;
    }, [r, n]),
    o = t ? r : a;
  return o;
}
var ue,
  de,
  fe = e(() => {
    i(),
      F(),
      (ue = {
        onClick: { type: y.EventHandler },
        onMouseDown: { type: y.EventHandler },
        onMouseUp: { type: y.EventHandler },
        onMouseEnter: { type: y.EventHandler },
        onMouseLeave: { type: y.EventHandler },
      }),
      (de = (e, t) => e.find((e) => e.toLowerCase().includes(t)));
  });
function W(e) {
  let {
      color: t,
      selectByList: n,
      iconSearch: r,
      iconSelection: i,
      onClick: c,
      onMouseDown: l,
      onMouseUp: u,
      onMouseEnter: f,
      onMouseLeave: m,
      weight: h,
      mirrored: g,
    } = e,
    v = s(!1),
    y = le(pe, n, r, i, ge),
    [b, x] = p(y === `Home` ? oe(a) : null);
  async function S() {
    try {
      let e = `${me}${y}.js@0.0.57`,
        t = await import(e);
      v.current && x(t.default(a));
    } catch {
      v.current && x(null);
    }
  }
  d(
    () => (
      (v.current = !0),
      S(),
      () => {
        v.current = !1;
      }
    ),
    [y],
  );
  let w = C.current() === C.canvas,
    T = w ? o(H, {}) : null;
  return o(_.div, {
    style: { display: `contents` },
    onClick: c,
    onMouseEnter: f,
    onMouseLeave: m,
    onMouseDown: l,
    onMouseUp: u,
    children: b
      ? o(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 256 256`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            color: t,
            flexShrink: 0,
            transform: g ? `scale(-1, 1)` : void 0,
          },
          focusable: `false`,
          color: t,
          children: o(b, { color: t, weight: h }),
        })
      : T,
  });
}
var pe,
  me,
  he,
  ge,
  _e = e(() => {
    r(),
      i(),
      F(),
      g(),
      re(),
      se(),
      fe(),
      (pe =
        `Acorn.AddressBook.AddressBookTabs.AirTrafficControl.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTaxiing.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.AmazonLogo.Ambulance.Anchor.AnchorSimple.AndroidLogo.Angle.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.ApproximateEquals.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsMerge.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsSplit.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asclepius.Asterisk.AsteriskSimple.At.Atom.Avocado.Axe.Baby.BabyCarriage.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barn.Barricade.Baseball.BaseballCap.BaseballHelmet.Basket.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryPlusVertical.BatteryVerticalEmpty.BatteryVerticalFull.BatteryVerticalHigh.BatteryVerticalLow.BatteryWarning.BeachBall.Beanie.Bed.BeerBottle.BeerStein.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.Belt.BezierCurve.Bicycle.Binary.Binoculars.Biohazard.Bird.Blueprint.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Bomb.Bone.Book.BookBookmark.BookOpen.BookOpenText.BookOpenUser.BookUser.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.Boot.Boules.BoundingBox.BowlFood.BowlSteam.BowlingBall.BoxArrowDown.BoxArrowUp.BoxingGlove.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Bread.Bridge.Briefcase.BriefcaseMetal.Broadcast.Broom.Browser.Browsers.Bug.BugBeetle.BugDroid.Building.BuildingApartment.BuildingOffice.Buildings.Bulldozer.Bus.Butterfly.CableCar.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarDot.CalendarDots.CalendarHeart.CalendarMinus.CalendarPlus.CalendarSlash.CalendarStar.CalendarX.CallBell.Camera.CameraPlus.CameraRotate.CameraSlash.Campfire.Car.CarBattery.CarProfile.CarSimple.Cardholder.Cards.CardsThree.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretCircleUpDown.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretLineDown.CaretLineLeft.CaretLineRight.CaretLineUp.CaretRight.CaretUp.CaretUpDown.Carrot.CashRegister.CassetteTape.CastleTurret.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.CellTower.Certificate.Chair.Chalkboard.ChalkboardSimple.ChalkboardTeacher.Champagne.ChargingStation.ChartBar.ChartBarHorizontal.ChartDonut.ChartLine.ChartLineDown.ChartLineUp.ChartPie.ChartPieSlice.ChartPolar.ChartScatter.Chat.ChatCentered.ChatCenteredDots.ChatCenteredSlash.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleSlash.ChatCircleText.ChatDots.ChatSlash.ChatTeardrop.ChatTeardropDots.ChatTeardropSlash.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckFat.CheckSquare.CheckSquareOffset.Checkerboard.Checks.Cheers.Cheese.ChefHat.Cherries.Church.Cigarette.CigaretteSlash.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CirclesFour.CirclesThree.CirclesThreePlus.Circuitry.City.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClockCountdown.ClockUser.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.CloudWarning.CloudX.Clover.Club.CoatHanger.CodaLogo.Code.CodeBlock.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.CoffeeBean.Coin.CoinVertical.Coins.Columns.ColumnsPlusLeft.ColumnsPlusRight.Command.Compass.CompassRose.CompassTool.ComputerTower.Confetti.ContactlessPayment.Control.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Couch.CourtBasketball.Cow.CowboyHat.Cpu.Crane.CraneTower.CreditCard.Cricket.Crop.Cross.Crosshair.CrosshairSimple.Crown.CrownCross.CrownSimple.Cube.CubeFocus.CubeTransparent.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorClick.CursorText.Cylinder.Database.Desk.Desktop.DesktopTower.Detective.DevToLogo.DeviceMobile.DeviceMobileCamera.DeviceMobileSlash.DeviceMobileSpeaker.DeviceRotate.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Devices.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscoBall.DiscordLogo.Divide.Dna.Dog.Door.DoorOpen.Dot.DotOutline.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.Dress.Dresser.DribbbleLogo.Drone.Drop.DropHalf.DropHalfBottom.DropSimple.DropSlash.DropboxLogo.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Elevator.Empty.Engine.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.EscalatorDown.EscalatorUp.Exam.ExclamationMark.Exclude.ExcludeSquare.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.Eyes.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.FalloutShelter.Fan.Farm.FastForward.FastForwardCircle.Feather.FediverseLogo.FigmaLogo.File.FileArchive.FileArrowDown.FileArrowUp.FileAudio.FileC.FileCloud.FileCode.FileCpp.FileCss.FileCsv.FileDashed.FileDoc.FileHtml.FileImage.FileIni.FileJpg.FileJs.FileJsx.FileLock.FileMagnifyingGlass.FileMd.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FilePy.FileRs.FileSql.FileSvg.FileText.FileTs.FileTsx.FileTxt.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmReel.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireExtinguisher.FireSimple.FireTruck.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagBannerFold.FlagCheckered.FlagPennant.Flame.Flashlight.Flask.FlipHorizontal.FlipVertical.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlowerTulip.FlyingSaucer.Folder.FolderDashed.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDashed.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.FootballHelmet.Footprints.ForkKnife.FourK.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.FunnelSimpleX.FunnelX.GameController.Garage.GasCan.GasPump.Gauge.Gavel.Gear.GearFine.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeSimpleX.GlobeStand.GlobeX.Goggles.Golf.GoodreadsLogo.GoogleCardboardLogo.GoogleChromeLogo.GoogleDriveLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gps.GpsFix.GpsSlash.Gradient.GraduationCap.Grains.GrainsSlash.Graph.GraphicsCard.GreaterThan.GreaterThanOrEqual.GridFour.GridNine.Guitar.HairDryer.Hamburger.Hammer.Hand.HandArrowDown.HandArrowUp.HandCoins.HandDeposit.HandEye.HandFist.HandGrabbing.HandHeart.HandPalm.HandPeace.HandPointing.HandSoap.HandSwipeLeft.HandSwipeRight.HandTap.HandWaving.HandWithdraw.Handbag.HandbagSimple.HandsClapping.HandsPraying.Handshake.HardDrive.HardDrives.HardHat.Hash.HashStraight.HeadCircuit.Headlights.Headphones.Headset.Heart.HeartBreak.HeartHalf.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighDefinition.HighHeel.Highlighter.HighlighterCircle.Hockey.Hoodie.Horse.Hospital.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.Hurricane.IceCream.IdentificationBadge.IdentificationCard.Image.ImageBroken.ImageSquare.Images.ImagesSquare.Infinity.Info.InstagramLogo.Intersect.IntersectSquare.IntersectThree.Intersection.Invoice.Island.Jar.JarLabel.Jeep.Joystick.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.LampPendant.Laptop.Lasso.LastfmLogo.Layout.Leaf.Lectern.Lego.LegoSmiley.LessThan.LessThanOrEqual.LetterCircleH.LetterCircleP.LetterCircleV.Lifebuoy.Lightbulb.LightbulbFilament.Lighthouse.Lightning.LightningA.LightningSlash.LineSegment.LineSegments.LineVertical.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinktreeLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListHeart.ListMagnifyingGlass.ListNumbers.ListPlus.ListStar.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.Lockers.Log.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.Mailbox.MapPin.MapPinArea.MapPinLine.MapPinPlus.MapPinSimple.MapPinSimpleArea.MapPinSimpleLine.MapTrifold.MarkdownLogo.MarkerCircle.Martini.MaskHappy.MaskSad.MastodonLogo.MathOperations.MatrixLogo.Medal.MedalMilitary.MediumLogo.Megaphone.MegaphoneSimple.MemberOf.Memory.MessengerLogo.MetaLogo.Meteor.Metronome.Microphone.MicrophoneSlash.MicrophoneStage.Microscope.MicrosoftExcelLogo.MicrosoftOutlookLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.MinusSquare.Money.MoneyWavy.Monitor.MonitorArrowUp.MonitorPlay.Moon.MoonStars.Moped.MopedFront.Mosque.Motorcycle.Mountains.Mouse.MouseLeftClick.MouseMiddleClick.MouseRightClick.MouseScroll.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesMinus.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Network.NetworkSlash.NetworkX.Newspaper.NewspaperClipping.NotEquals.NotMemberOf.NotSubsetOf.NotSupersetOf.Notches.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NotionLogo.NuclearPlant.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Numpad.Nut.NyTimesLogo.Octagon.OfficeChair.Onigiri.OpenAiLogo.Option.Orange.OrangeSlice.Oven.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.Panorama.Pants.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Paragraph.Parallelogram.Park.Password.Path.PatreonLogo.Pause.PauseCircle.PawPrint.PaypalLogo.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilRuler.PencilSimple.PencilSimpleLine.PencilSimpleSlash.PencilSlash.Pentagon.Pentagram.Pepper.Percent.Person.PersonArmsSpread.PersonSimple.PersonSimpleBike.PersonSimpleCircle.PersonSimpleHike.PersonSimpleRun.PersonSimpleSki.PersonSimpleSwim.PersonSimpleTaiChi.PersonSimpleThrow.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneList.PhoneOutgoing.PhonePause.PhonePlus.PhoneSlash.PhoneTransfer.PhoneX.PhosphorLogo.Pi.PianoKeys.PicnicTable.PictureInPicture.PiggyBank.Pill.PingPong.PintGlass.PinterestLogo.Pinwheel.Pipe.PipeWrench.PixLogo.Pizza.Placeholder.Planet.Plant.Play.PlayCircle.PlayPause.Playlist.Plug.PlugCharging.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PlusSquare.PokerChip.PoliceCar.Polygon.Popcorn.Popsicle.PottedPlant.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.Pulse.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.QuestionMark.Queue.Quotes.Rabbit.Racquet.Radical.Radio.RadioButton.Radioactive.Rainbow.RainbowCloud.Ranking.ReadCvLogo.Receipt.ReceiptX.Record.Rectangle.RectangleDashed.Recycle.RedditLogo.Repeat.RepeatOnce.ReplitLogo.Resize.Rewind.RewindCircle.RoadHorizon.Robot.Rocket.RocketLaunch.Rows.RowsPlusBottom.RowsPlusTop.Rss.RssSimple.Rug.Ruler.Sailboat.Scales.Scan.ScanSmiley.Scissors.Scooter.Screencast.Screwdriver.Scribble.ScribbleLoop.Scroll.Seal.SealCheck.SealPercent.SealQuestion.SealWarning.Seat.Seatbelt.SecurityCamera.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Shapes.Share.ShareFat.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShippingContainer.ShirtFolded.ShootingStar.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shovel.Shower.Shrimp.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.Sigma.SignIn.SignOut.Signature.Signpost.SimCard.Siren.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SkypeLogo.SlackLogo.Sliders.SlidersHorizontal.Slideshow.Smiley.SmileyAngry.SmileyBlank.SmileyMeh.SmileyMelting.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Sneaker.SneakerMove.Snowflake.SoccerBall.Sock.SolarPanel.SolarRoof.SortAscending.SortDescending.SoundcloudLogo.Spade.Sparkle.SpeakerHifi.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Speedometer.Sphere.Spinner.SpinnerBall.SpinnerGap.Spiral.SplitHorizontal.SplitVertical.SpotifyLogo.SprayBottle.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquareSplitVertical.SquaresFour.Stack.StackMinus.StackOverflowLogo.StackPlus.StackSimple.Stairs.Stamp.StandardDefinition.Star.StarAndCrescent.StarFour.StarHalf.StarOfDavid.SteamLogo.SteeringWheel.Steps.Stethoscope.Sticker.Stool.Stop.StopCircle.Storefront.Strategy.StripeLogo.Student.SubsetOf.SubsetProperOf.Subtitles.SubtitlesSlash.Subtract.SubtractSquare.Subway.Suitcase.SuitcaseRolling.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.SupersetOf.SupersetProperOf.Swap.Swatches.SwimmingPool.Sword.Synagogue.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TeaBag.TelegramLogo.Television.TelevisionSimple.TennisBall.Tent.Terminal.TerminalWindow.TestTube.TextAUnderline.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextB.TextColumns.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextSubscript.TextSuperscript.TextT.TextTSlash.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThreadsLogo.ThreeD.ThumbsDown.ThumbsUp.Ticket.TidalLogo.TiktokLogo.Tilde.Timer.TipJar.Tipi.Tire.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Toolbox.Tooth.Tornado.Tote.ToteSimple.Towel.Tractor.Trademark.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Tram.Translate.Trash.TrashSimple.Tray.TrayArrowDown.TrayArrowUp.TreasureChest.Tree.TreeEvergreen.TreePalm.TreeStructure.TreeView.TrendDown.TrendUp.Triangle.TriangleDashed.Trolley.TrolleySuitcase.Trophy.Truck.TruckTrailer.TumblrLogo.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Union.Unite.UniteSquare.Upload.UploadSimple.Usb.User.UserCheck.UserCircle.UserCircleCheck.UserCircleDashed.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSound.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Van.Vault.VectorThree.VectorTwo.Vibrate.Video.VideoCamera.VideoCameraSlash.VideoConference.Vignette.VinylRecord.VirtualReality.Virus.Visor.Voicemail.Volleyball.Wall.Wallet.Warehouse.Warning.WarningCircle.WarningDiamond.WarningOctagon.WashingMachine.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waveform.WaveformSlash.Waves.Webcam.WebcamSlash.WebhooksLogo.WechatLogo.WhatsappLogo.Wheelchair.WheelchairMotion.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.Windmill.WindowsLogo.Wine.Wrench.X.XCircle.XLogo.XSquare.Yarn.YinYang.YoutubeLogo`.split(
          `.`,
        )),
      (me = `https://framer.com/m/phosphor-icons/`),
      (he = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`]),
      (ge = pe.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (W.displayName = `Phosphor`),
      (W.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `House`,
        iconSearch: `House`,
        color: `#66F`,
        selectByList: !0,
        weight: `regular`,
        mirrored: !1,
      }),
      O(W, {
        selectByList: {
          type: y.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: W.defaultProps.selectByList,
        },
        iconSelection: {
          type: y.Enum,
          options: pe,
          defaultValue: W.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`,
        },
        iconSearch: {
          type: y.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        color: {
          type: y.Color,
          title: `Color`,
          defaultValue: W.defaultProps.color,
        },
        weight: {
          type: y.Enum,
          title: `Weight`,
          optionTitles: he.map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
          options: he,
          defaultValue: W.defaultProps.weight,
        },
        mirrored: {
          type: y.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: W.defaultProps.mirrored,
        },
        ...ue,
      });
  }),
  ve,
  ye,
  be,
  xe = e(() => {
    F(),
      A.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (ve = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ye = [
        `.framer-Dl4MG .framer-styles-preset-1y7m99z:not(.rich-text-wrapper), .framer-Dl4MG .framer-styles-preset-1y7m99z.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 160%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-Dl4MG .framer-styles-preset-1y7m99z:not(.rich-text-wrapper), .framer-Dl4MG .framer-styles-preset-1y7m99z.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 160%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-Dl4MG .framer-styles-preset-1y7m99z:not(.rich-text-wrapper), .framer-Dl4MG .framer-styles-preset-1y7m99z.rich-text-wrapper p { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 160%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (be = `framer-Dl4MG`);
  }),
  Se,
  Ce,
  we,
  Te = e(() => {
    F(),
      A.loadFonts([
        `Inter-Medium`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-MediumItalic`,
      ]),
      (Se = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/assets/khkJkwSL66WFg8SX6Wa726c.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/assets/ksvR4VsLksjpSwnC2fPgHRNMw.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Ce = [
        `.framer-4orGh .framer-styles-preset-12su4sl:not(.rich-text-wrapper), .framer-4orGh .framer-styles-preset-12su4sl.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 160%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-d4c0a0e6-8fba-45bc-8f6f-215e608cd0df, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-4orGh .framer-styles-preset-12su4sl:not(.rich-text-wrapper), .framer-4orGh .framer-styles-preset-12su4sl.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 160%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-d4c0a0e6-8fba-45bc-8f6f-215e608cd0df, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-4orGh .framer-styles-preset-12su4sl:not(.rich-text-wrapper), .framer-4orGh .framer-styles-preset-12su4sl.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 160%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-d4c0a0e6-8fba-45bc-8f6f-215e608cd0df, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (we = `framer-4orGh`);
  });
function Ee(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  G,
  Be = e(() => {
    r(),
      F(),
      g(),
      i(),
      _e(),
      Te(),
      (De = j(W)),
      (Oe = P(W)),
      (ke = [`jwC47zCF6`, `mmH9oevh3`, `stCIAuwK4`, `jhrQsRt6W`, `qEfzyQG6F`]),
      (Ae = `framer-z8SZr`),
      (je = {
        jhrQsRt6W: `framer-v-1gsq19h`,
        jwC47zCF6: `framer-v-aouqpb`,
        mmH9oevh3: `framer-v-lvvaka`,
        qEfzyQG6F: `framer-v-byjv0c`,
        stCIAuwK4: `framer-v-8ip9ku`,
      }),
      (Me = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Ne = ({ value: e, children: t }) => {
        let n = c(h),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return o(h.Provider, { value: i, children: t });
      }),
      (Pe = _.create(f)),
      (Fe = {
        "main cta": `jwC47zCF6`,
        "secondary cta": `mmH9oevh3`,
        "service button": `qEfzyQG6F`,
        "Variant 3": `stCIAuwK4`,
        "Variant 4": `jhrQsRt6W`,
      }),
      (Ie = ({
        click2: e,
        height: t,
        id: n,
        link: r,
        newTab: i,
        phospherIcon: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        cRoeZpcrs: o ?? c.cRoeZpcrs ?? `Try Gerbo Live`,
        dG05QQM_v: e ?? c.dG05QQM_v,
        GrpQ8zFBL: r ?? c.GrpQ8zFBL,
        RCPR2dydG: a ?? c.RCPR2dydG ?? `Crown`,
        RZWvw5mQ_: i ?? c.RZWvw5mQ_ ?? !0,
        variant: Fe[c.variant] ?? c.variant ?? `jwC47zCF6`,
      })),
      (Le = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Re = t(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, setLocale: l } = R();
        L();
        let {
            style: d,
            className: p,
            layoutId: h,
            variant: g,
            cRoeZpcrs: y,
            GrpQ8zFBL: b,
            RCPR2dydG: x,
            RZWvw5mQ_: C,
            dG05QQM_v: w,
            ...D
          } = Ie(e),
          {
            baseVariant: O,
            classNames: A,
            clearLoadingGesture: j,
            gestureHandlers: M,
            gestureVariant: N,
            isLoading: P,
            setGestureState: F,
            setVariant: ee,
            variants: z,
          } = B({
            cycleOrder: ke,
            defaultVariant: `jwC47zCF6`,
            ref: i,
            variant: g,
            variantClassNames: je,
          }),
          V = Le(e, z),
          { activeVariantCallback: te, delay: ne } = I(O),
          H = te(async (...e) => {
            if ((F({ isPressed: !1 }), w)) {
              let t = await w(...e);
              if (t === !1) return !1;
            }
          }),
          re = [we],
          U = k(Ae, ...re),
          ie = () => O !== `qEfzyQG6F`;
        return o(m, {
          id: h ?? a,
          children: o(Pe, {
            animate: z,
            initial: !1,
            children: o(Ne, {
              value: Me,
              children: o(S, {
                href: b,
                motionChild: !0,
                nodeId: `jwC47zCF6`,
                openInNewTab: C,
                scopeId: `bVvbBzZqE`,
                smoothScroll: !0,
                children: o(_.a, {
                  ...D,
                  ...M,
                  className: `${k(U, `framer-aouqpb`, p, A)} framer-3joj8o`,
                  "data-framer-name": `main cta`,
                  "data-highlight": !0,
                  layoutDependency: V,
                  layoutId: `jwC47zCF6`,
                  onTap: H,
                  ref: i,
                  style: {
                    background: `linear-gradient(125deg, var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, rgb(255, 215, 0)) -4%, var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, rgb(255, 215, 0)) 100%)`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    boxShadow: `inset 0px 1px 2px 0px rgb(192, 176, 232), 0px 0.7065919983928324px 0.7065919983928324px -0.5833333333333333px rgba(99, 69, 173, 0.35), 0px 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px rgba(99, 69, 173, 0.34), 0px 3.6217592146567767px 3.6217592146567767px -1.75px rgba(99, 69, 173, 0.33), 0px 6.8655999097303715px 6.8655999097303715px -2.333333333333333px rgba(99, 69, 173, 0.3), 0px 13.646761411524492px 13.646761411524492px -2.916666666666667px rgba(99, 69, 173, 0.26), 0px 30px 30px -3.5px rgba(99, 69, 173, 0.15)`,
                    ...d,
                  },
                  variants: {
                    jhrQsRt6W: {
                      background: `linear-gradient(125deg, rgb(224, 197, 117) 39.189189189189186%, rgba(237, 225, 190, 0.9) 100%)`,
                      boxShadow: `inset 0px 1px 2px 0px var(--token-781d11f5-bf5d-4746-9aec-b794f5ae2c6e, rgb(216, 223, 229)), 0px 0.7961918735236395px 0.7961918735236395px -0.875px rgba(121, 152, 189, 0.34), 0px 2.414506143104518px 2.414506143104518px -1.75px rgba(121, 152, 189, 0.33), 0px 6.382653521484461px 6.382653521484461px -2.625px rgba(121, 152, 189, 0.29), 0px 20px 20px -3.5px rgba(121, 152, 189, 0.15)`,
                    },
                    mmH9oevh3: {
                      background: `linear-gradient(127deg, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)) -68%, var(--token-b03e3eb5-0157-442a-b34c-2b15e482ece4, rgb(50, 61, 104)) 100%)`,
                      boxShadow: `inset 0px 1px 2px 0px rgb(184, 193, 230), 0px 0.7065919983928324px 0.7065919983928324px -0.5833333333333333px rgba(46, 64, 128, 0.35), 0px 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px rgba(46, 64, 128, 0.34), 0px 3.6217592146567767px 3.6217592146567767px -1.75px rgba(46, 64, 128, 0.33), 0px 6.8655999097303715px 6.8655999097303715px -2.333333333333333px rgba(46, 64, 128, 0.3), 0px 13.646761411524492px 13.646761411524492px -2.916666666666667px rgba(46, 64, 128, 0.26), 0px 30px 30px -3.5px rgba(46, 64, 128, 0.15)`,
                    },
                    stCIAuwK4: {
                      background: `linear-gradient(125deg, rgba(141, 143, 94, 0.5) -44%, var(--token-aeb15aaf-db9c-447f-8383-662c7fda9c5a, rgba(240, 248, 255, 0.9)) 100%)`,
                      boxShadow: `inset 0px 1px 2px 0px var(--token-781d11f5-bf5d-4746-9aec-b794f5ae2c6e, rgb(216, 223, 229)), 0px 0.7961918735236395px 0.7961918735236395px -0.875px rgba(121, 152, 189, 0.34), 0px 2.414506143104518px 2.414506143104518px -1.75px rgba(121, 152, 189, 0.33), 0px 6.382653521484461px 6.382653521484461px -2.625px rgba(121, 152, 189, 0.29), 0px 20px 20px -3.5px rgba(121, 152, 189, 0.15)`,
                    },
                  },
                  ...Ee(
                    {
                      jhrQsRt6W: { "data-framer-name": `Variant 4` },
                      mmH9oevh3: { "data-framer-name": `secondary cta` },
                      qEfzyQG6F: { "data-framer-name": `service button` },
                      stCIAuwK4: { "data-framer-name": `Variant 3` },
                    },
                    O,
                    N,
                  ),
                  children: u(_.div, {
                    className: `framer-uczcf9`,
                    "data-framer-name": `icon & text`,
                    layoutDependency: V,
                    layoutId: `M5FlvQFuZ`,
                    children: [
                      o(T, {
                        __fromCanvasComponent: !0,
                        children: o(f, {
                          children: o(_.p, {
                            className: `framer-styles-preset-12su4sl`,
                            "data-styles-preset": `StOoogDYM`,
                            children: `Check Case Studies `,
                          }),
                        }),
                        className: `framer-1ke1sy8`,
                        "data-framer-name": `Button`,
                        fonts: [`Inter`],
                        layoutDependency: V,
                        layoutId: `dko_m_cvc`,
                        text: y,
                        variants: {
                          jhrQsRt6W: {
                            "--extracted-r6o4lv": `var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))`,
                          },
                          stCIAuwK4: {
                            "--extracted-r6o4lv": `var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ee(
                          {
                            jhrQsRt6W: {
                              children: o(f, {
                                children: o(_.p, {
                                  className: `framer-styles-preset-12su4sl`,
                                  "data-styles-preset": `StOoogDYM`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)))`,
                                  },
                                  children: `Check Case Studies `,
                                }),
                              }),
                            },
                            stCIAuwK4: {
                              children: o(f, {
                                children: o(_.p, {
                                  className: `framer-styles-preset-12su4sl`,
                                  "data-styles-preset": `StOoogDYM`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)))`,
                                  },
                                  children: `Check Case Studies `,
                                }),
                              }),
                            },
                          },
                          O,
                          N,
                        ),
                      }),
                      ie() &&
                        o(v, {
                          children: o(E, {
                            className: `framer-ms81nd-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: V,
                            layoutId: `bbPrAkF_m-container`,
                            nodeId: `bbPrAkF_m`,
                            rendersWithMotion: !0,
                            scopeId: `bVvbBzZqE`,
                            children: o(W, {
                              color: `var(--token-d4c0a0e6-8fba-45bc-8f6f-215e608cd0df, rgb(255, 255, 255))`,
                              height: `100%`,
                              iconSearch: `House`,
                              iconSelection: x,
                              id: `bbPrAkF_m`,
                              layoutId: `bbPrAkF_m`,
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: `100%`, width: `100%` },
                              weight: `fill`,
                              width: `100%`,
                              ...Ee(
                                {
                                  jhrQsRt6W: {
                                    color: `var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))`,
                                    weight: `regular`,
                                  },
                                  mmH9oevh3: { weight: `regular` },
                                  stCIAuwK4: {
                                    color: `var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))`,
                                    weight: `regular`,
                                  },
                                },
                                O,
                                N,
                              ),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (ze = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-z8SZr.framer-3joj8o, .framer-z8SZr .framer-3joj8o { display: block; }`,
        `.framer-z8SZr.framer-aouqpb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 24px 12px 24px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-z8SZr .framer-uczcf9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-z8SZr .framer-1ke1sy8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-z8SZr .framer-ms81nd-container { flex: none; height: 20px; position: relative; width: 20px; }`,
        `.framer-z8SZr.framer-v-lvvaka .framer-1ke1sy8, .framer-z8SZr.framer-v-8ip9ku .framer-1ke1sy8, .framer-z8SZr.framer-v-1gsq19h .framer-1ke1sy8 { order: 1; }`,
        `.framer-z8SZr.framer-v-lvvaka .framer-ms81nd-container, .framer-z8SZr.framer-v-8ip9ku .framer-ms81nd-container, .framer-z8SZr.framer-v-1gsq19h .framer-ms81nd-container { order: 0; }`,
        `.framer-z8SZr.framer-v-byjv0c.framer-aouqpb { padding: 7px 15px 7px 15px; }`,
        ...Ce,
      ]),
      (G = V(Re, ze, `framer-z8SZr`)),
      (G.displayName = `Buttons / Button`),
      (G.defaultProps = { height: 46.4, width: 159.967 }),
      O(G, {
        variant: {
          options: [
            `jwC47zCF6`,
            `mmH9oevh3`,
            `stCIAuwK4`,
            `jhrQsRt6W`,
            `qEfzyQG6F`,
          ],
          optionTitles: [
            `main cta`,
            `secondary cta`,
            `Variant 3`,
            `Variant 4`,
            `service button`,
          ],
          title: `Variant`,
          type: y.Enum,
        },
        cRoeZpcrs: {
          defaultValue: `Try Gerbo Live`,
          displayTextArea: !1,
          title: `Title`,
          type: y.String,
        },
        GrpQ8zFBL: { title: `Link`, type: y.Link },
        RCPR2dydG: Oe?.iconSelection && {
          ...Oe.iconSelection,
          defaultValue: `Crown`,
          description: void 0,
          hidden: void 0,
          title: `phospher icon`,
        },
        RZWvw5mQ_: { defaultValue: !0, title: `New Tab`, type: y.Boolean },
        dG05QQM_v: { title: `Click 2`, type: y.EventHandler },
      }),
      D(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...De,
          ...M(Se),
        ],
        { supportsExplicitInterCodegen: !0 },
      );
  }),
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye = e(() => {
    r(),
      F(),
      i(),
      (Ve = t(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (He = _.create(Ve)),
      (Ue = t((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(He, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (We = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0.75 18 C 0.336 18 0 17.664 0 17.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 L 18 17.25 C 18 17.664 17.664 18 17.25 18 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18px" id="ubm8tT7Gs" transform="translate(3 3)" width="18px"/><path d="M 0.75 18 C 0.336 18 0 17.664 0 17.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 L 18 17.25 C 18 17.664 17.664 18 17.25 18 Z" fill="transparent" height="18px" id="uLIbokj1X" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 3)" width="18px"/><path d="M 0 0 L 0 6" fill="transparent" height="6px" id="wcL4Xtw6S" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(11.25 10.5)" width="1px"/><path d="M 0 0 L 0 6" fill="transparent" height="6px" id="haFqKG9T6" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.25 10.5)" width="1px"/><path d="M 0 2.625 C 0 1.175 1.175 0 2.625 0 C 4.075 0 5.25 1.175 5.25 2.625 L 5.25 6" fill="transparent" height="6px" id="ldXP7NTX2" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(11.25 10.5)" width="5.25px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="M86o3vn0T" transform="translate(7.125 6.75)" width="2.25px"/></svg>`),
      (Ge = ({
        alpha: e,
        color: t,
        height: n,
        id: r,
        width: i,
        width1: a,
        ...o
      }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Ke = t(function (e, t) {
        let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            ezTt3ayMo: s,
            lschgej4H: c,
            qxTvv_EBh: l,
            ...u
          } = Ge(e),
          d = z(`4033599021`, We);
        return o(Ue, {
          ...u,
          className: k(`framer-0ju92`, r),
          layoutId: i,
          ref: t,
          role: `presentation`,
          style: { "--1m6trwb": l, "--21h8s6": s, "--pgex8v": c, ...n },
          viewBox: `0 0 24 24`,
          children: o(`use`, { href: d }),
        });
      })),
      (qe = [
        `.framer-0ju92 { aspect-ratio: 1; display: block; width: 24px; }`,
      ]),
      (Je = V(Ke, qe, `framer-0ju92`)),
      (Je.displayName = `Linkedin Logo`),
      O(Je, {
        ezTt3ayMo: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: y.Color,
        },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: y.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: y.Number,
        },
      });
  }),
  Xe,
  Ze,
  Qe,
  $e = e(() => {
    F(),
      A.loadFonts([]),
      (Xe = [{ explicitInter: !0, fonts: [] }]),
      (Ze = [
        `.framer-x7PZK .framer-styles-preset-1snln9b:not(.rich-text-wrapper), .framer-x7PZK .framer-styles-preset-1snln9b.rich-text-wrapper a { --framer-link-current-text-decoration: underline; --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #0e1c29); --framer-link-text-decoration: underline; }`,
      ]),
      (Qe = `framer-x7PZK`);
  }),
  et,
  tt,
  nt,
  rt,
  it,
  at = e(() => {
    r(),
      F(),
      i(),
      (et = t((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(_.div, { ...a, layoutId: r, ref: t })
          : o(`div`, { ...a, ref: t });
      })),
      (tt = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        ezTt3ayMo: e ?? i.ezTt3ayMo ?? `rgb(0, 0, 0)`,
      })),
      (nt = t(function (e, t) {
        let {
          style: n,
          className: r,
          layoutId: i,
          variant: a,
          ezTt3ayMo: s,
          ...c
        } = tt(e);
        return o(et, {
          ...c,
          className: k(`framer-fWMLr`, r),
          layoutId: i,
          ref: t,
          style: { "--21h8s6": s, ...n },
        });
      })),
      (rt = [
        `.framer-fWMLr { aspect-ratio: 1; background-color: var(--21h8s6); mask-image: url('data:image/svg+xml,<svg aria-label="Shapes" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5.212 3.513 C 5.11 3.206 4.823 3 4.5 3 C 4.177 3 3.891 3.206 3.788 3.513 L 0.038 14.763 C -0.038 14.992 0.001 15.243 0.142 15.439 C 0.283 15.634 0.509 15.75 0.75 15.75 L 8.25 15.75 C 8.491 15.75 8.718 15.634 8.859 15.439 C 9 15.243 9.038 14.992 8.962 14.763 Z M 1.791 14.25 L 4.5 6.122 L 7.209 14.25 Z M 18 4.875 C 18 2.183 15.817 0 13.125 0 C 10.433 0 8.25 2.183 8.25 4.875 C 8.25 7.567 10.433 9.75 13.125 9.75 C 15.816 9.747 17.997 7.566 18 4.875 Z M 9.75 4.875 C 9.75 3.011 11.261 1.5 13.125 1.5 C 14.989 1.5 16.5 3.011 16.5 4.875 C 16.5 6.739 14.989 8.25 13.125 8.25 C 11.261 8.25 9.75 6.739 9.75 4.875 Z M 19.5 11.25 L 11.25 11.25 C 10.836 11.25 10.5 11.586 10.5 12 L 10.5 17.25 C 10.5 17.664 10.836 18 11.25 18 L 19.5 18 C 19.914 18 20.25 17.664 20.25 17.25 L 20.25 12 C 20.25 11.586 19.914 11.25 19.5 11.25 Z M 18.75 16.5 L 12 16.5 L 12 12.75 L 18.75 12.75 Z" fill="var(--21h8s6, rgb(0,0,0))" height="18px" id="h63qvlcJx" opacity="1" transform="translate(1.5 2.25)" width="20.250061094760895px"/></svg>'); mask-position: center; mask-repeat: no-repeat; width: 24px; }`,
      ]),
      (it = V(nt, rt, `framer-fWMLr`)),
      O(it, {
        ezTt3ayMo: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Fill`,
          type: y.Color,
        },
      });
  }),
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  K,
  ht = e(() => {
    r(),
      F(),
      g(),
      i(),
      at(),
      (ot = `framer-eEWyY`),
      (st = { JlRmfMC8_: `framer-v-1h5wwau` }),
      (ct = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (lt = ({ value: e, children: t }) => {
        let n = c(h),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return o(h.Provider, { value: i, children: t });
      }),
      (ut = _.create(f)),
      (dt = ({ height: e, icon: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        btsn0TPZb: t ?? a.btsn0TPZb ?? it,
        VGPx5sSb0: r ?? a.VGPx5sSb0,
      })),
      (ft = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (pt = t(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, setLocale: l } = R();
        L();
        let {
            style: u,
            className: d,
            layoutId: f,
            variant: p,
            btsn0TPZb: h,
            VGPx5sSb0: g,
            ...v
          } = dt(e),
          {
            baseVariant: y,
            classNames: b,
            clearLoadingGesture: C,
            gestureHandlers: w,
            gestureVariant: T,
            isLoading: E,
            setGestureState: D,
            setVariant: O,
            variants: A,
          } = B({
            defaultVariant: `JlRmfMC8_`,
            ref: i,
            variant: p,
            variantClassNames: st,
          }),
          j = ft(e, A),
          M = [],
          N = k(ot, ...M);
        return o(m, {
          id: f ?? a,
          children: o(ut, {
            animate: A,
            initial: !1,
            children: o(lt, {
              value: ct,
              children: o(S, {
                href: g,
                motionChild: !0,
                nodeId: `JlRmfMC8_`,
                openInNewTab: !0,
                scopeId: `E3i1YeqxR`,
                children: o(_.a, {
                  ...v,
                  ...w,
                  "aria-label": `Instagram`,
                  className: `${k(N, `framer-1h5wwau`, d, b)} framer-1lno7sh`,
                  "data-framer-name": `Variant 1`,
                  "data-reset": `button`,
                  layoutDependency: j,
                  layoutId: `JlRmfMC8_`,
                  ref: i,
                  style: { ...u },
                  children: o(x, {
                    animated: !0,
                    className: `framer-x233mr`,
                    Component: h,
                    layoutDependency: j,
                    layoutId: `NVf1009Cq`,
                    style: {
                      "--21h8s6": `var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))`,
                    },
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (mt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-eEWyY.framer-1lno7sh, .framer-eEWyY .framer-1lno7sh { display: block; }`,
        `.framer-eEWyY.framer-1h5wwau { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 4px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-eEWyY .framer-x233mr { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
      ]),
      (K = V(pt, mt, `framer-eEWyY`)),
      (K.displayName = `Social`),
      (K.defaultProps = { height: 32, width: 32 }),
      O(K, {
        btsn0TPZb: {
          defaultValue: {
            identifier: `module:QGsiOmymnPflDqXQHBDF/7ieEdtPrCagk41eLw1dF/VWXKKteE7.js:default`,
            moduleId: `QGsiOmymnPflDqXQHBDF`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: y.VectorSetItem,
        },
        VGPx5sSb0: { title: `Link`, type: y.Link },
      }),
      D(K, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      });
  });
function gt(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  q,
  kt = e(() => {
    r(),
      F(),
      g(),
      i(),
      Te(),
      (_t = { GoqFsAI3k: { hover: !0 }, XwyalyVrL: { hover: !0 } }),
      (vt = [`GoqFsAI3k`, `GevokqksY`, `XwyalyVrL`]),
      (yt = `framer-Fx7OC`),
      (bt = {
        GevokqksY: `framer-v-1wc4oz6`,
        GoqFsAI3k: `framer-v-1r7yv6g`,
        XwyalyVrL: `framer-v-6ksh1l`,
      }),
      (xt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (St = ({ value: e, children: t }) => {
        let n = c(h),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return o(h.Provider, { value: i, children: t });
      }),
      (Ct = _.create(f)),
      (wt = {
        "footer link": `XwyalyVrL`,
        "nav link": `GoqFsAI3k`,
        phone: `GevokqksY`,
      }),
      (Tt = ({
        click2: e,
        height: t,
        howItWorks: n,
        id: r,
        link: i,
        width: a,
        ...o
      }) => ({
        ...o,
        HiWWnC7e7: e ?? o.HiWWnC7e7,
        NL4yh60Hu: n ?? o.NL4yh60Hu ?? `How It Works`,
        TGqAsaBVG: i ?? o.TGqAsaBVG,
        variant: wt[o.variant] ?? o.variant ?? `GoqFsAI3k`,
      })),
      (Et = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Dt = t(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, setLocale: l } = R();
        L();
        let {
            style: u,
            className: d,
            layoutId: p,
            variant: h,
            NL4yh60Hu: g,
            TGqAsaBVG: v,
            HiWWnC7e7: y,
            ...b
          } = Tt(e),
          {
            baseVariant: x,
            classNames: C,
            clearLoadingGesture: w,
            gestureHandlers: E,
            gestureVariant: D,
            isLoading: O,
            setGestureState: A,
            setVariant: j,
            variants: M,
          } = B({
            cycleOrder: vt,
            defaultVariant: `GoqFsAI3k`,
            enabledGestures: _t,
            ref: i,
            variant: h,
            variantClassNames: bt,
          }),
          N = Et(e, M),
          { activeVariantCallback: P, delay: F } = I(x),
          ee = P(async (...e) => {
            if ((A({ isPressed: !1 }), y)) {
              let t = await y(...e);
              if (t === !1) return !1;
            }
          }),
          z = [we],
          V = k(yt, ...z);
        return o(m, {
          id: p ?? a,
          children: o(Ct, {
            animate: M,
            initial: !1,
            children: o(St, {
              value: xt,
              children: o(S, {
                href: v,
                motionChild: !0,
                nodeId: `GoqFsAI3k`,
                openInNewTab: !1,
                scopeId: `LQY2VTFQE`,
                smoothScroll: !0,
                children: o(_.a, {
                  ...b,
                  ...E,
                  className: `${k(V, `framer-1r7yv6g`, d, C)} framer-180aerv`,
                  "data-border": !0,
                  "data-framer-name": `nav link`,
                  "data-highlight": !0,
                  layoutDependency: N,
                  layoutId: `GoqFsAI3k`,
                  onTap: ee,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(33, 33, 33, 0)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgba(216, 223, 230, 0)`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...u,
                  },
                  variants: {
                    "GoqFsAI3k-hover": {
                      backgroundColor: `var(--token-781d11f5-bf5d-4746-9aec-b794f5ae2c6e, rgb(216, 223, 229))`,
                    },
                    GevokqksY: {
                      "--border-color": `rgb(238, 238, 238)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backgroundColor: `rgba(224, 232, 255, 0)`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                  },
                  ...gt(
                    {
                      "GoqFsAI3k-hover": { "data-framer-name": void 0 },
                      "XwyalyVrL-hover": { "data-framer-name": void 0 },
                      GevokqksY: { "data-framer-name": `phone` },
                      XwyalyVrL: { "data-framer-name": `footer link` },
                    },
                    x,
                    D,
                  ),
                  children: o(T, {
                    __fromCanvasComponent: !0,
                    children: o(f, {
                      children: o(_.p, {
                        className: `framer-styles-preset-12su4sl`,
                        "data-styles-preset": `StOoogDYM`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)))`,
                        },
                        children: `Components`,
                      }),
                    }),
                    className: `framer-1cny34m`,
                    fonts: [`Inter`],
                    layoutDependency: N,
                    layoutId: `WQP9K1hkj`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                      "--framer-paragraph-spacing": `0px`,
                      opacity: 0.9,
                    },
                    text: g,
                    variants: {
                      "XwyalyVrL-hover": { opacity: 1 },
                      XwyalyVrL: { opacity: 0.75 },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...gt(
                      {
                        GevokqksY: {
                          children: o(f, {
                            children: o(_.p, {
                              className: `framer-styles-preset-12su4sl`,
                              "data-styles-preset": `StOoogDYM`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)))`,
                              },
                              children: `Components`,
                            }),
                          }),
                        },
                      },
                      x,
                      D,
                    ),
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (Ot = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Fx7OC.framer-180aerv, .framer-Fx7OC .framer-180aerv { display: block; }`,
        `.framer-Fx7OC.framer-1r7yv6g { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 16px 8px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Fx7OC .framer-1cny34m { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Fx7OC.framer-v-1wc4oz6.framer-1r7yv6g { padding: 16px; will-change: unset; }`,
        `.framer-Fx7OC.framer-v-6ksh1l.framer-1r7yv6g { padding: 0px; }`,
        ...Ce,
        `.framer-Fx7OC[data-border="true"]::after, .framer-Fx7OC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (q = V(Dt, Ot, `framer-Fx7OC`)),
      (q.displayName = `nav / nav link`),
      (q.defaultProps = { height: 38.4, width: 121.267 }),
      O(q, {
        variant: {
          options: [`GoqFsAI3k`, `GevokqksY`, `XwyalyVrL`],
          optionTitles: [`nav link`, `phone`, `footer link`],
          title: `Variant`,
          type: y.Enum,
        },
        NL4yh60Hu: {
          defaultValue: `How It Works`,
          displayTextArea: !1,
          title: `How It Works`,
          type: y.String,
        },
        TGqAsaBVG: { title: `Link`, type: y.Link },
        HiWWnC7e7: { title: `Click 2`, type: y.EventHandler },
      }),
      D(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...M(Se),
        ],
        { supportsExplicitInterCodegen: !0 },
      );
  });
function At(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  J,
  Ut = e(() => {
    r(),
      F(),
      g(),
      i(),
      (jt = [`HMSfk1oe8`, `ALdnmpZK7`, `OC6TjEX3c`]),
      (Mt = `framer-Vujqb`),
      (Nt = {
        ALdnmpZK7: `framer-v-1m89n6`,
        HMSfk1oe8: `framer-v-uc6i08`,
        OC6TjEX3c: `framer-v-14xw9jy`,
      }),
      (Pt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Ft = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (It = ({ value: e, children: t }) => {
        let n = c(h),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return o(h.Provider, { value: i, children: t });
      }),
      (Lt = _.create(f)),
      (Rt = { Default: `HMSfk1oe8`, Medium: `ALdnmpZK7`, Small: `OC6TjEX3c` }),
      (zt = ({ height: e, id: t, logo: n, width: r, ...i }) => ({
        ...i,
        PIwNgm_lj: n ??
          i.PIwNgm_lj ?? {
            pixelHeight: 567,
            pixelWidth: 1726,
            src: `/images/k0PQG0X6hhyOXUOKss86eJY14.png?scale-down-to=512`,
            srcSet: `/images/k0PQG0X6hhyOXUOKss86eJY14.png?scale-down-to=512 512w,/images/k0PQG0X6hhyOXUOKss86eJY14.png?scale-down-to=1024 1024w,/images/k0PQG0X6hhyOXUOKss86eJY14.png 1726w`,
          },
        variant: Rt[i.variant] ?? i.variant ?? `HMSfk1oe8`,
      })),
      (Bt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Vt = t(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, setLocale: l } = R(),
          u = L(),
          {
            style: d,
            className: f,
            layoutId: p,
            variant: h,
            PIwNgm_lj: g,
            ...v
          } = zt(e),
          {
            baseVariant: y,
            classNames: x,
            clearLoadingGesture: C,
            gestureHandlers: w,
            gestureVariant: T,
            isLoading: E,
            setGestureState: D,
            setVariant: O,
            variants: A,
          } = B({
            cycleOrder: jt,
            defaultVariant: `HMSfk1oe8`,
            ref: i,
            variant: h,
            variantClassNames: Nt,
          }),
          j = Bt(e, A),
          M = [],
          P = k(Mt, ...M);
        return o(m, {
          id: p ?? a,
          children: o(Lt, {
            animate: A,
            initial: !1,
            children: o(It, {
              value: Pt,
              children: o(S, {
                motionChild: !0,
                nodeId: `HMSfk1oe8`,
                scopeId: `MM37vJ9a3`,
                ...At(
                  {
                    ALdnmpZK7: {
                      href: { webPageId: `augiA20Il` },
                      openInNewTab: !1,
                      smoothScroll: !0,
                    },
                  },
                  y,
                  T,
                ),
                children: o(_.a, {
                  ...v,
                  ...w,
                  className: `${k(P, `framer-uc6i08`, f, x)} framer-29qle1`,
                  "data-framer-name": `Default`,
                  layoutDependency: j,
                  layoutId: `HMSfk1oe8`,
                  ref: i,
                  style: { ...d },
                  ...At(
                    {
                      ALdnmpZK7: { "data-framer-name": `Medium` },
                      OC6TjEX3c: { "data-framer-name": `Small` },
                    },
                    y,
                    T,
                  ),
                  children: o(S, {
                    href: { webPageId: `augiA20Il` },
                    motionChild: !0,
                    nodeId: `wFCaNZFrA`,
                    openInNewTab: !1,
                    scopeId: `MM37vJ9a3`,
                    ...At(
                      {
                        ALdnmpZK7: {
                          href: { hash: `:akRK8f7LT`, webPageId: `augiA20Il` },
                          smoothScroll: !0,
                        },
                      },
                      y,
                      T,
                    ),
                    children: o(b, {
                      as: `a`,
                      background: {
                        alt: ``,
                        fit: `fit`,
                        intrinsicHeight: 460,
                        intrinsicWidth: 2751,
                        loading: N(
                          (u?.y || 0) +
                            (0 +
                              ((u?.height || 46) -
                                0 -
                                ((u?.height || 46) - 0) * 1) /
                                2),
                        ),
                        pixelHeight: 162,
                        pixelWidth: 428,
                        sizes: `max(${u?.width || `100vw`}, 1px)`,
                        ...Ft(g),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-auvcx6 framer-29qle1`,
                      "data-framer-name": `Logo`,
                      layoutDependency: j,
                      layoutId: `wFCaNZFrA`,
                      ...At(
                        {
                          ALdnmpZK7: {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              intrinsicHeight: 460,
                              intrinsicWidth: 2751,
                              loading: N(
                                (u?.y || 0) +
                                  (0 +
                                    ((u?.height || 36) -
                                      0 -
                                      ((u?.height || 36) - 0) * 1) /
                                      2),
                              ),
                              pixelHeight: 162,
                              pixelWidth: 428,
                              sizes: `max(${u?.width || `100vw`}, 1px)`,
                              ...Ft(g),
                              positionX: `left`,
                              positionY: `center`,
                            },
                          },
                          OC6TjEX3c: {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              intrinsicHeight: 460,
                              intrinsicWidth: 2751,
                              loading: N(
                                (u?.y || 0) +
                                  (0 +
                                    ((u?.height || 31) -
                                      0 -
                                      ((u?.height || 31) - 0) * 1) /
                                      2),
                              ),
                              pixelHeight: 162,
                              pixelWidth: 428,
                              sizes: `max(${u?.width || `100vw`}, 1px)`,
                              ...Ft(g),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                        },
                        y,
                        T,
                      ),
                    }),
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (Ht = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Vujqb.framer-29qle1, .framer-Vujqb .framer-29qle1 { display: block; }`,
        `.framer-Vujqb.framer-uc6i08 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 46px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 169px; }`,
        `.framer-Vujqb .framer-auvcx6 { flex: 1 0 0px; height: 100%; overflow: visible; position: relative; text-decoration: none; width: 1px; }`,
        `.framer-Vujqb.framer-v-1m89n6.framer-uc6i08 { height: 36px; text-decoration: none; width: 113px; }`,
        `.framer-Vujqb.framer-v-1m89n6 .framer-auvcx6, .framer-Vujqb.framer-v-14xw9jy .framer-auvcx6 { order: 0; }`,
        `.framer-Vujqb.framer-v-14xw9jy.framer-uc6i08 { height: 31px; width: 110px; }`,
      ]),
      (J = V(Vt, Ht, `framer-Vujqb`)),
      (J.displayName = `Elements / Logo`),
      (J.defaultProps = { height: 46, width: 169 }),
      O(J, {
        variant: {
          options: [`HMSfk1oe8`, `ALdnmpZK7`, `OC6TjEX3c`],
          optionTitles: [`Default`, `Medium`, `Small`],
          title: `Variant`,
          type: y.Enum,
        },
        PIwNgm_lj: {
          __defaultAssetReference: `data:framer/asset-reference,k0PQG0X6hhyOXUOKss86eJY14.png?originalFilename=aria+logo.png&preferredSize=auto`,
          title: `logo`,
          type: y.ResponsiveImage,
        },
      }),
      D(J, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      });
  });
function Y(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  X,
  sn = e(() => {
    r(),
      F(),
      g(),
      i(),
      Ye(),
      xe(),
      $e(),
      ht(),
      kt(),
      Ut(),
      (Wt = j(J)),
      (Gt = j(q)),
      (Kt = j(K)),
      (qt = [`EbpapWQsU`, `zGNwQKXPE`, `pOmGhkHnU`]),
      (Jt = `framer-TVwhy`),
      (Yt = {
        EbpapWQsU: `framer-v-pf8i77`,
        pOmGhkHnU: `framer-v-1slkxqc`,
        zGNwQKXPE: `framer-v-14q9w38`,
      }),
      (Xt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Zt = {
        delay: 0,
        duration: 0.3,
        ease: [0.12, 0.23, 0.5, 1],
        type: `tween`,
      }),
      (Qt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Zt,
      }),
      ($t = ({ value: e, children: t }) => {
        let n = c(h),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return o(h.Provider, { value: i, children: t });
      }),
      (en = _.create(f)),
      (tn = { Desktop: `EbpapWQsU`, Phone: `pOmGhkHnU`, Tablet: `zGNwQKXPE` }),
      (nn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: tn[r.variant] ?? r.variant ?? `EbpapWQsU`,
      })),
      (rn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (an = t(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, setLocale: l } = R(),
          d = L(),
          { style: p, className: h, layoutId: g, variant: y, ...b } = nn(e),
          {
            baseVariant: x,
            classNames: C,
            clearLoadingGesture: D,
            gestureHandlers: O,
            gestureVariant: A,
            isLoading: j,
            setGestureState: M,
            setVariant: N,
            variants: P,
          } = B({
            cycleOrder: qt,
            defaultVariant: `EbpapWQsU`,
            ref: i,
            variant: y,
            variantClassNames: Yt,
          }),
          F = rn(e, P),
          { activeVariantCallback: z, delay: V } = I(x),
          te = z(async (...e) => {
            N(`pOmGhkHnU`);
          }),
          ne = [be, Qe],
          H = k(Jt, ...ne);
        return (
          ee(),
          o(m, {
            id: g ?? a,
            children: o(en, {
              animate: P,
              initial: !1,
              children: o($t, {
                value: Xt,
                children: o(_.footer, {
                  ...b,
                  ...O,
                  className: k(H, `framer-pf8i77`, h, C),
                  "data-framer-name": `Desktop`,
                  layoutDependency: F,
                  layoutId: `EbpapWQsU`,
                  ref: i,
                  style: { ...p },
                  ...Y(
                    {
                      pOmGhkHnU: { "data-framer-name": `Phone` },
                      zGNwQKXPE: { "data-framer-name": `Tablet` },
                    },
                    x,
                    A,
                  ),
                  children: u(_.div, {
                    className: `framer-8n55mt`,
                    "data-framer-name": `container`,
                    layoutDependency: F,
                    layoutId: `CpSVPjwdN`,
                    children: [
                      u(_.div, {
                        className: `framer-138h37m`,
                        "data-framer-name": `links & others`,
                        layoutDependency: F,
                        layoutId: `DmUAUMq_z`,
                        children: [
                          u(_.div, {
                            className: `framer-1xegm75`,
                            "data-framer-name": `Left side content`,
                            layoutDependency: F,
                            layoutId: `tbR3O6rau`,
                            children: [
                              o(v, {
                                height: 46,
                                y:
                                  (d?.y || 0) +
                                  60 +
                                  (((d?.height || 306) - 120 - 211.4) / 2 +
                                    0 +
                                    0) +
                                  0 +
                                  0 +
                                  0 +
                                  0 +
                                  0,
                                ...Y(
                                  {
                                    pOmGhkHnU: {
                                      y:
                                        (d?.y || 0) +
                                        60 +
                                        (((d?.height || 501) - 120 - 422.2) /
                                          2 +
                                          0 +
                                          0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        116,
                                    },
                                  },
                                  x,
                                  A,
                                ),
                                children: o(E, {
                                  className: `framer-12nwhue-container`,
                                  layoutDependency: F,
                                  layoutId: `eKAVOVCvQ-container`,
                                  nodeId: `eKAVOVCvQ`,
                                  rendersWithMotion: !0,
                                  scopeId: `licEmhkfK`,
                                  children: o(J, {
                                    height: `100%`,
                                    id: `eKAVOVCvQ`,
                                    layoutId: `eKAVOVCvQ`,
                                    variant: `ALdnmpZK7`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              u(_.nav, {
                                className: `framer-1pv70ts`,
                                "data-framer-name": `nav links`,
                                layoutDependency: F,
                                layoutId: `CjQZXWiF4`,
                                children: [
                                  u(_.div, {
                                    className: `framer-9swfpk`,
                                    layoutDependency: F,
                                    layoutId: `XEcH9MTJN`,
                                    children: [
                                      o(w, {
                                        links: [
                                          {
                                            href: {
                                              hash: `:hYjf36gN5`,
                                              webPageId: `augiA20Il`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              hash: `:hYjf36gN5`,
                                              webPageId: `augiA20Il`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              hash: `:hYjf36gN5`,
                                              webPageId: `augiA20Il`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          o(v, {
                                            height: 38,
                                            y:
                                              (d?.y || 0) +
                                              60 +
                                              (((d?.height || 306) -
                                                120 -
                                                211.4) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              86 +
                                              0 +
                                              0,
                                            ...Y(
                                              {
                                                pOmGhkHnU: {
                                                  y:
                                                    (d?.y || 0) +
                                                    60 +
                                                    (((d?.height || 501) -
                                                      120 -
                                                      422.2) /
                                                      2 +
                                                      0 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              x,
                                              A,
                                            ),
                                            children: o(E, {
                                              className: `framer-1y1lmq0-container`,
                                              layoutDependency: F,
                                              layoutId: `XxQjYdKop-container`,
                                              nodeId: `XxQjYdKop`,
                                              rendersWithMotion: !0,
                                              scopeId: `licEmhkfK`,
                                              children: o(q, {
                                                height: `100%`,
                                                id: `XxQjYdKop`,
                                                layoutId: `XxQjYdKop`,
                                                NL4yh60Hu: `Features`,
                                                TGqAsaBVG: e[0],
                                                variant: `XwyalyVrL`,
                                                width: `100%`,
                                                ...Y(
                                                  {
                                                    pOmGhkHnU: {
                                                      TGqAsaBVG: e[2],
                                                    },
                                                    zGNwQKXPE: {
                                                      TGqAsaBVG: e[1],
                                                    },
                                                  },
                                                  x,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                      o(w, {
                                        links: [
                                          {
                                            href: {
                                              hash: `:O2UmFEWea`,
                                              webPageId: `augiA20Il`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              hash: `:O2UmFEWea`,
                                              webPageId: `augiA20Il`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              hash: `:O2UmFEWea`,
                                              webPageId: `augiA20Il`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          o(v, {
                                            height: 38,
                                            y:
                                              (d?.y || 0) +
                                              60 +
                                              (((d?.height || 306) -
                                                120 -
                                                211.4) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              86 +
                                              0 +
                                              0,
                                            ...Y(
                                              {
                                                pOmGhkHnU: {
                                                  y:
                                                    (d?.y || 0) +
                                                    60 +
                                                    (((d?.height || 501) -
                                                      120 -
                                                      422.2) /
                                                      2 +
                                                      0 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              x,
                                              A,
                                            ),
                                            children: o(E, {
                                              className: `framer-1d91l13-container`,
                                              layoutDependency: F,
                                              layoutId: `PpzsMDBJ3-container`,
                                              nodeId: `PpzsMDBJ3`,
                                              rendersWithMotion: !0,
                                              scopeId: `licEmhkfK`,
                                              children: o(q, {
                                                height: `100%`,
                                                id: `PpzsMDBJ3`,
                                                layoutId: `PpzsMDBJ3`,
                                                NL4yh60Hu: `Pricing`,
                                                TGqAsaBVG: e[0],
                                                variant: `XwyalyVrL`,
                                                width: `100%`,
                                                ...Y(
                                                  {
                                                    pOmGhkHnU: {
                                                      TGqAsaBVG: e[2],
                                                    },
                                                    zGNwQKXPE: {
                                                      TGqAsaBVG: e[1],
                                                    },
                                                  },
                                                  x,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                      o(w, {
                                        links: [
                                          {
                                            href: {
                                              hash: `:aVAbPFLLv`,
                                              webPageId: `augiA20Il`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              hash: `:aVAbPFLLv`,
                                              webPageId: `augiA20Il`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: {
                                              hash: `:aVAbPFLLv`,
                                              webPageId: `augiA20Il`,
                                            },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          o(v, {
                                            height: 38,
                                            y:
                                              (d?.y || 0) +
                                              60 +
                                              (((d?.height || 306) -
                                                120 -
                                                211.4) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              86 +
                                              0 +
                                              0,
                                            ...Y(
                                              {
                                                pOmGhkHnU: {
                                                  y:
                                                    (d?.y || 0) +
                                                    60 +
                                                    (((d?.height || 501) -
                                                      120 -
                                                      422.2) /
                                                      2 +
                                                      0 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              x,
                                              A,
                                            ),
                                            children: o(E, {
                                              className: `framer-aqoheb-container`,
                                              layoutDependency: F,
                                              layoutId: `lqeRxn_Xy-container`,
                                              nodeId: `lqeRxn_Xy`,
                                              rendersWithMotion: !0,
                                              scopeId: `licEmhkfK`,
                                              children: o(q, {
                                                height: `100%`,
                                                id: `lqeRxn_Xy`,
                                                layoutId: `lqeRxn_Xy`,
                                                NL4yh60Hu: `Industries`,
                                                TGqAsaBVG: e[0],
                                                variant: `XwyalyVrL`,
                                                width: `100%`,
                                                ...Y(
                                                  {
                                                    pOmGhkHnU: {
                                                      TGqAsaBVG: e[2],
                                                    },
                                                    zGNwQKXPE: {
                                                      TGqAsaBVG: e[1],
                                                    },
                                                  },
                                                  x,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                      o(w, {
                                        links: [
                                          {
                                            href: { webPageId: `J986jsEGO` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `J986jsEGO` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `J986jsEGO` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          o(v, {
                                            height: 38,
                                            y:
                                              (d?.y || 0) +
                                              60 +
                                              (((d?.height || 306) -
                                                120 -
                                                211.4) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              86 +
                                              0 +
                                              0,
                                            ...Y(
                                              {
                                                pOmGhkHnU: {
                                                  y:
                                                    (d?.y || 0) +
                                                    60 +
                                                    (((d?.height || 501) -
                                                      120 -
                                                      422.2) /
                                                      2 +
                                                      0 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              x,
                                              A,
                                            ),
                                            children: o(E, {
                                              className: `framer-64zxk8-container`,
                                              layoutDependency: F,
                                              layoutId: `PvzhktKoM-container`,
                                              nodeId: `PvzhktKoM`,
                                              rendersWithMotion: !0,
                                              scopeId: `licEmhkfK`,
                                              children: o(q, {
                                                height: `100%`,
                                                id: `PvzhktKoM`,
                                                layoutId: `PvzhktKoM`,
                                                NL4yh60Hu: `Contact`,
                                                TGqAsaBVG: e[0],
                                                variant: `XwyalyVrL`,
                                                width: `100%`,
                                                ...Y(
                                                  {
                                                    pOmGhkHnU: {
                                                      TGqAsaBVG: e[2],
                                                    },
                                                    zGNwQKXPE: {
                                                      TGqAsaBVG: e[1],
                                                    },
                                                  },
                                                  x,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                      o(w, {
                                        links: [
                                          {
                                            href: { webPageId: `IGP28tJuK` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `IGP28tJuK` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `IGP28tJuK` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          o(v, {
                                            height: 38,
                                            y:
                                              (d?.y || 0) +
                                              60 +
                                              (((d?.height || 306) -
                                                120 -
                                                211.4) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              86 +
                                              0 +
                                              0,
                                            ...Y(
                                              {
                                                pOmGhkHnU: {
                                                  y:
                                                    (d?.y || 0) +
                                                    60 +
                                                    (((d?.height || 501) -
                                                      120 -
                                                      422.2) /
                                                      2 +
                                                      0 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              x,
                                              A,
                                            ),
                                            children: o(E, {
                                              className: `framer-s927q5-container`,
                                              layoutDependency: F,
                                              layoutId: `VBLyZ40zt-container`,
                                              nodeId: `VBLyZ40zt`,
                                              rendersWithMotion: !0,
                                              scopeId: `licEmhkfK`,
                                              children: o(q, {
                                                height: `100%`,
                                                id: `VBLyZ40zt`,
                                                layoutId: `VBLyZ40zt`,
                                                NL4yh60Hu: `Blog`,
                                                TGqAsaBVG: e[0],
                                                variant: `XwyalyVrL`,
                                                width: `100%`,
                                                ...Y(
                                                  {
                                                    pOmGhkHnU: {
                                                      TGqAsaBVG: e[2],
                                                    },
                                                    zGNwQKXPE: {
                                                      TGqAsaBVG: e[1],
                                                    },
                                                  },
                                                  x,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                  u(_.div, {
                                    className: `framer-1kxkb74`,
                                    layoutDependency: F,
                                    layoutId: `WHzCWffTP`,
                                    children: [
                                      o(w, {
                                        links: [
                                          {
                                            href: { webPageId: `ZK2wKnzbL` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ZK2wKnzbL` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ZK2wKnzbL` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          o(v, {
                                            height: 38,
                                            y:
                                              (d?.y || 0) +
                                              60 +
                                              (((d?.height || 306) -
                                                120 -
                                                211.4) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              86 +
                                              0 +
                                              0,
                                            ...Y(
                                              {
                                                pOmGhkHnU: {
                                                  y:
                                                    (d?.y || 0) +
                                                    60 +
                                                    (((d?.height || 501) -
                                                      120 -
                                                      422.2) /
                                                      2 +
                                                      0 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    38 +
                                                    0,
                                                },
                                              },
                                              x,
                                              A,
                                            ),
                                            children: o(E, {
                                              className: `framer-jlowep-container`,
                                              layoutDependency: F,
                                              layoutId: `jNjDD2z6F-container`,
                                              nodeId: `jNjDD2z6F`,
                                              rendersWithMotion: !0,
                                              scopeId: `licEmhkfK`,
                                              children: o(q, {
                                                height: `100%`,
                                                id: `jNjDD2z6F`,
                                                layoutId: `jNjDD2z6F`,
                                                NL4yh60Hu: `Privacy`,
                                                TGqAsaBVG: e[0],
                                                variant: `XwyalyVrL`,
                                                width: `100%`,
                                                ...Y(
                                                  {
                                                    pOmGhkHnU: {
                                                      TGqAsaBVG: e[2],
                                                    },
                                                    zGNwQKXPE: {
                                                      TGqAsaBVG: e[1],
                                                    },
                                                  },
                                                  x,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                      o(w, {
                                        links: [
                                          {
                                            href: { webPageId: `I7UNmcwR8` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `I7UNmcwR8` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `I7UNmcwR8` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          o(v, {
                                            height: 38,
                                            y:
                                              (d?.y || 0) +
                                              60 +
                                              (((d?.height || 306) -
                                                120 -
                                                211.4) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              86 +
                                              0 +
                                              0,
                                            ...Y(
                                              {
                                                pOmGhkHnU: {
                                                  y:
                                                    (d?.y || 0) +
                                                    60 +
                                                    (((d?.height || 501) -
                                                      120 -
                                                      422.2) /
                                                      2 +
                                                      0 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    38 +
                                                    0,
                                                },
                                              },
                                              x,
                                              A,
                                            ),
                                            children: o(E, {
                                              className: `framer-1r76n5w-container`,
                                              layoutDependency: F,
                                              layoutId: `tMKg4bSmT-container`,
                                              nodeId: `tMKg4bSmT`,
                                              rendersWithMotion: !0,
                                              scopeId: `licEmhkfK`,
                                              children: o(q, {
                                                height: `100%`,
                                                id: `tMKg4bSmT`,
                                                layoutId: `tMKg4bSmT`,
                                                NL4yh60Hu: `Terms`,
                                                TGqAsaBVG: e[0],
                                                variant: `XwyalyVrL`,
                                                width: `100%`,
                                                ...Y(
                                                  {
                                                    pOmGhkHnU: {
                                                      TGqAsaBVG: e[2],
                                                    },
                                                    zGNwQKXPE: {
                                                      TGqAsaBVG: e[1],
                                                    },
                                                  },
                                                  x,
                                                  A,
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o(_.div, {
                            className: `framer-5gfwlo`,
                            "data-framer-name": `Socials`,
                            layoutDependency: F,
                            layoutId: `RNr6fCQAF`,
                            children: o(v, {
                              height: 32,
                              y:
                                (d?.y || 0) +
                                60 +
                                (((d?.height || 306) - 120 - 211.4) / 2 +
                                  0 +
                                  0) +
                                0 +
                                0 +
                                0 +
                                0,
                              ...Y(
                                {
                                  pOmGhkHnU: {
                                    y:
                                      (d?.y || 0) +
                                      60 +
                                      (((d?.height || 501) - 120 - 422.2) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      202 +
                                      0,
                                  },
                                },
                                x,
                                A,
                              ),
                              children: o(E, {
                                className: `framer-3kuecg-container`,
                                layoutDependency: F,
                                layoutId: `ZUw09guEI-container`,
                                nodeId: `ZUw09guEI`,
                                rendersWithMotion: !0,
                                scopeId: `licEmhkfK`,
                                style: { opacity: 0.6 },
                                whileHover: Qt,
                                children: o(K, {
                                  btsn0TPZb: Je,
                                  height: `100%`,
                                  id: `ZUw09guEI`,
                                  layoutId: `ZUw09guEI`,
                                  VGPx5sSb0: `https://www.linkedin.com/company/ariaspeaks/`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      o(_.div, {
                        "aria-label": `Divider line`,
                        className: `framer-9lhywz`,
                        "data-framer-name": `separation Line`,
                        layoutDependency: F,
                        layoutId: `EDDJh07iY`,
                        style: {
                          backgroundColor: `var(--token-c630804f-5e50-4893-b680-27b64d932590, rgba(94, 120, 143, 0.5))`,
                        },
                      }),
                      u(_.div, {
                        className: `framer-1k06dc2`,
                        "data-framer-name": `copyrights`,
                        layoutDependency: F,
                        layoutId: `wudmdHjPm`,
                        children: [
                          o(T, {
                            __fromCanvasComponent: !0,
                            children: o(f, {
                              children: o(_.p, {
                                className: `framer-styles-preset-1y7m99z`,
                                "data-styles-preset": `C0wa976Zp`,
                                children: `© 2025 Gerbo`,
                              }),
                            }),
                            className: `framer-u3mhqb`,
                            fonts: [`Inter`],
                            layoutDependency: F,
                            layoutId: `dF95VYIDM`,
                            style: { "--framer-paragraph-spacing": `0px` },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          u(_.div, {
                            className: `framer-dozp9x`,
                            "data-framer-name": `right side content`,
                            layoutDependency: F,
                            layoutId: `SjbdmzxQN`,
                            ...Y(
                              {
                                pOmGhkHnU: { "data-highlight": !0, onTap: te },
                              },
                              x,
                              A,
                            ),
                            children: [
                              o(T, {
                                __fromCanvasComponent: !0,
                                children: o(f, {
                                  children: o(_.p, {
                                    className: `framer-styles-preset-1y7m99z`,
                                    "data-styles-preset": `C0wa976Zp`,
                                    children: `Made by Softli5 `,
                                  }),
                                }),
                                className: `framer-1rk2av0`,
                                "data-framer-name": `text`,
                                fonts: [`Inter`],
                                layoutDependency: F,
                                layoutId: `eXIa8uV9z`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(T, {
                                __fromCanvasComponent: !0,
                                children: o(f, {
                                  children: o(_.p, {
                                    className: `framer-styles-preset-1y7m99z`,
                                    "data-styles-preset": `C0wa976Zp`,
                                    children: o(S, {
                                      href: `mailto:support@gerbospeaks.com`,
                                      motionChild: !0,
                                      nodeId: `Igo7apw9a`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `licEmhkfK`,
                                      smoothScroll: !1,
                                      children: o(_.a, {
                                        className: `framer-styles-preset-1snln9b`,
                                        "data-styles-preset": `CO_HimyHZ`,
                                        children: `support@gerbospeaks.com`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-ordfnt`,
                                fonts: [`Inter`],
                                layoutDependency: F,
                                layoutId: `Igo7apw9a`,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          })
        );
      })),
      (on = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-TVwhy.framer-j0803h, .framer-TVwhy .framer-j0803h { display: block; }`,
        `.framer-TVwhy.framer-pf8i77 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 60px; position: relative; width: 1200px; }`,
        `.framer-TVwhy .framer-8n55mt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1240px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-TVwhy .framer-138h37m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-TVwhy .framer-1xegm75 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1120px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-TVwhy .framer-12nwhue-container, .framer-TVwhy .framer-1y1lmq0-container, .framer-TVwhy .framer-1d91l13-container, .framer-TVwhy .framer-aqoheb-container, .framer-TVwhy .framer-64zxk8-container, .framer-TVwhy .framer-s927q5-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-TVwhy .framer-1pv70ts, .framer-TVwhy .framer-1k06dc2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-TVwhy .framer-9swfpk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-TVwhy .framer-1kxkb74 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-TVwhy .framer-jlowep-container, .framer-TVwhy .framer-1r76n5w-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-TVwhy .framer-5gfwlo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-TVwhy .framer-3kuecg-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-TVwhy .framer-9lhywz { flex: none; height: 1px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-TVwhy .framer-u3mhqb, .framer-TVwhy .framer-1rk2av0, .framer-TVwhy .framer-ordfnt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-TVwhy .framer-dozp9x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-TVwhy.framer-v-14q9w38.framer-pf8i77 { width: 810px; }`,
        `.framer-TVwhy.framer-v-1slkxqc.framer-pf8i77 { padding: 60px 18px 60px 18px; width: 390px; }`,
        `.framer-TVwhy.framer-v-1slkxqc .framer-138h37m { flex-direction: column; gap: 40px; justify-content: flex-start; }`,
        `.framer-TVwhy.framer-v-1slkxqc .framer-1xegm75 { flex: none; width: 100%; }`,
        `.framer-TVwhy.framer-v-1slkxqc .framer-12nwhue-container, .framer-TVwhy.framer-v-1slkxqc .framer-u3mhqb { order: 1; }`,
        `.framer-TVwhy.framer-v-1slkxqc .framer-1pv70ts { align-content: flex-start; align-items: flex-start; flex-direction: column; order: 0; }`,
        `.framer-TVwhy.framer-v-1slkxqc .framer-9swfpk { align-content: center; align-items: center; flex: none; justify-content: center; width: 100%; }`,
        `.framer-TVwhy.framer-v-1slkxqc .framer-1kxkb74 { flex: none; justify-content: center; width: 100%; }`,
        `.framer-TVwhy.framer-v-1slkxqc .framer-1k06dc2 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; justify-content: flex-start; }`,
        `.framer-TVwhy.framer-v-1slkxqc .framer-dozp9x { align-content: flex-start; align-items: flex-start; cursor: pointer; flex-direction: column; gap: 24px; order: 0; }`,
        ...ye,
        ...Ze,
      ]),
      (X = V(an, on, `framer-TVwhy`)),
      (X.displayName = `Navigation / Footer`),
      (X.defaultProps = { height: 306, width: 1200 }),
      O(X, {
        variant: {
          options: [`EbpapWQsU`, `zGNwQKXPE`, `pOmGhkHnU`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: y.Enum,
        },
      }),
      D(
        X,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Wt,
          ...Gt,
          ...Kt,
          ...M(ve),
          ...M(Xe),
        ],
        { supportsExplicitInterCodegen: !0 },
      );
  });
function cn(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  Z,
  bn = e(() => {
    r(),
      F(),
      g(),
      i(),
      (ln = [`Ox_13xhkg`, `LRVn1uHTU`]),
      (un = `framer-hVSrs`),
      (dn = { LRVn1uHTU: `framer-v-ki2my0`, Ox_13xhkg: `framer-v-aplreb` }),
      (fn = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (pn = ({ value: e, children: t }) => {
        let n = c(h),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return o(h.Provider, { value: i, children: t });
      }),
      (mn = _.create(f)),
      (hn = { Burger: `Ox_13xhkg`, X: `LRVn1uHTU` }),
      (gn = ({ height: e, id: t, tap: n, width: r, ...i }) => ({
        ...i,
        TBgHLr7MW: n ?? i.TBgHLr7MW,
        variant: hn[i.variant] ?? i.variant ?? `Ox_13xhkg`,
      })),
      (_n = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (vn = t(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, setLocale: l } = R();
        L();
        let {
            style: d,
            className: f,
            layoutId: p,
            variant: h,
            TBgHLr7MW: g,
            ...v
          } = gn(e),
          {
            baseVariant: y,
            classNames: b,
            clearLoadingGesture: x,
            gestureHandlers: S,
            gestureVariant: C,
            isLoading: w,
            setGestureState: T,
            setVariant: E,
            variants: D,
          } = B({
            cycleOrder: ln,
            defaultVariant: `Ox_13xhkg`,
            ref: i,
            variant: h,
            variantClassNames: dn,
          }),
          O = _n(e, D),
          { activeVariantCallback: A, delay: j } = I(y),
          M = A(async (...e) => {
            if ((T({ isPressed: !1 }), g)) {
              let t = await g(...e);
              if (t === !1) return !1;
            }
            E(`LRVn1uHTU`);
          }),
          N = A(async (...e) => {
            if ((T({ isPressed: !1 }), g)) {
              let t = await g(...e);
              if (t === !1) return !1;
            }
            E(`Ox_13xhkg`);
          }),
          P = [],
          F = k(un, ...P);
        return o(m, {
          id: p ?? a,
          children: o(mn, {
            animate: D,
            initial: !1,
            children: o(pn, {
              value: fn,
              children: o(_.div, {
                ...v,
                ...S,
                className: k(F, `framer-aplreb`, f, b),
                "data-framer-name": `Burger`,
                "data-highlight": !0,
                layoutDependency: O,
                layoutId: `Ox_13xhkg`,
                onTap: M,
                ref: i,
                style: { ...d },
                ...cn(
                  { LRVn1uHTU: { "data-framer-name": `X`, onTap: N } },
                  y,
                  C,
                ),
                children: u(_.div, {
                  className: `framer-18leysj`,
                  "data-framer-name": `hamburger menu`,
                  layoutDependency: O,
                  layoutId: `CP6adHWUD`,
                  children: [
                    o(_.div, {
                      className: `framer-vczd68`,
                      "data-framer-name": `Bottom`,
                      layoutDependency: O,
                      layoutId: `eqdWZwLMC`,
                      style: {
                        backgroundColor: `var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, rgb(255, 215, 0))`,
                        rotate: 0,
                      },
                      variants: { LRVn1uHTU: { rotate: -45 } },
                    }),
                    o(_.div, {
                      className: `framer-ycn294`,
                      "data-framer-name": `Mid`,
                      layoutDependency: O,
                      layoutId: `TiX8bufed`,
                      style: {
                        backgroundColor: `var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, rgb(255, 215, 0))`,
                        opacity: 1,
                      },
                      variants: { LRVn1uHTU: { opacity: 0 } },
                    }),
                    o(_.div, {
                      className: `framer-1dfkgfw`,
                      "data-framer-name": `Top`,
                      layoutDependency: O,
                      layoutId: `ikcxGGvle`,
                      style: {
                        backgroundColor: `var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, rgb(255, 215, 0))`,
                        rotate: 0,
                      },
                      variants: { LRVn1uHTU: { rotate: 45 } },
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (yn = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-hVSrs.framer-1ara51u, .framer-hVSrs .framer-1ara51u { display: block; }`,
        `.framer-hVSrs.framer-aplreb { cursor: pointer; height: 32px; overflow: hidden; position: relative; width: 32px; }`,
        `.framer-hVSrs .framer-18leysj { flex: none; height: 18px; left: calc(50.00000000000002% - 24px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 18px / 2); width: 24px; }`,
        `.framer-hVSrs .framer-vczd68 { bottom: 0px; flex: none; height: 2px; left: 0px; overflow: hidden; position: absolute; right: 0px; }`,
        `.framer-hVSrs .framer-ycn294 { flex: none; height: 2px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: calc(50.00000000000002% - 2px / 2); }`,
        `.framer-hVSrs .framer-1dfkgfw { flex: none; height: 2px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }`,
        `.framer-hVSrs.framer-v-ki2my0 .framer-vczd68 { bottom: unset; top: calc(50.00000000000002% - 2px / 2); }`,
        `.framer-hVSrs.framer-v-ki2my0 .framer-ycn294 { left: unset; width: 2px; }`,
        `.framer-hVSrs.framer-v-ki2my0 .framer-1dfkgfw { left: unset; right: -1px; top: calc(50.00000000000002% - 2px / 2); width: 26px; }`,
      ]),
      (Z = V(vn, yn, `framer-hVSrs`)),
      (Z.displayName = `nav / Menu Icon`),
      (Z.defaultProps = { height: 32, width: 32 }),
      O(Z, {
        variant: {
          options: [`Ox_13xhkg`, `LRVn1uHTU`],
          optionTitles: [`Burger`, `X`],
          title: `Variant`,
          type: y.Enum,
        },
        TBgHLr7MW: { title: `Tap`, type: y.EventHandler },
      }),
      D(Z, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      });
  });
function Q(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  $,
  Ln = e(() => {
    r(),
      F(),
      g(),
      i(),
      Be(),
      kt(),
      Ut(),
      bn(),
      (xn = j(J)),
      (Sn = j(Z)),
      (Cn = j(q)),
      (wn = j(G)),
      (Tn = [`eaBCOesTw`, `JiVdFNcDQ`, `rqcL3VnZ6`, `mLYwDiNSg`, `Iwzg9GxlV`]),
      (En = `framer-7WbiA`),
      (Dn = {
        eaBCOesTw: `framer-v-1l2jgli`,
        Iwzg9GxlV: `framer-v-2ts7qe`,
        JiVdFNcDQ: `framer-v-1v8mrgg`,
        mLYwDiNSg: `framer-v-v8k0ym`,
        rqcL3VnZ6: `framer-v-1id01nq`,
      }),
      (On = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (kn = {
        delay: 0,
        duration: 0.5,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (An = ({ value: e, children: t }) => {
        let n = c(h),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return o(h.Provider, { value: i, children: t });
      }),
      (jn = _.create(f)),
      (Mn = {
        "Phone Open": `mLYwDiNSg`,
        Desktop: `eaBCOesTw`,
        Phone: `rqcL3VnZ6`,
        Tablet: `JiVdFNcDQ`,
        Variant: `Iwzg9GxlV`,
      }),
      (Nn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Mn[r.variant] ?? r.variant ?? `eaBCOesTw`,
      })),
      (Pn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Fn = t(function (e, t) {
        let r = s(null),
          i = t ?? r,
          a = n(),
          { activeLocale: c, setLocale: l } = R(),
          d = L(),
          { style: f, className: p, layoutId: h, variant: g, ...y } = Nn(e),
          {
            baseVariant: b,
            classNames: x,
            clearLoadingGesture: S,
            gestureHandlers: C,
            gestureVariant: T,
            isLoading: D,
            setGestureState: O,
            setVariant: A,
            variants: j,
          } = B({
            cycleOrder: Tn,
            defaultVariant: `eaBCOesTw`,
            ref: i,
            variant: g,
            variantClassNames: Dn,
          }),
          M = Pn(e, j),
          { activeVariantCallback: N, delay: P } = I(b),
          F = N(async (...e) => {
            A(`mLYwDiNSg`);
          }),
          z = N(async (...e) => {
            A(`rqcL3VnZ6`);
          }),
          V = N(async (...e) => {
            A(`rqcL3VnZ6`);
          }),
          te = N(async (...e) => {
            A(`rqcL3VnZ6`);
          }),
          ne = [],
          H = k(En, ...ne),
          re = () => !![`rqcL3VnZ6`, `mLYwDiNSg`].includes(b),
          U = () => b !== `rqcL3VnZ6`;
        return (
          ee(),
          o(m, {
            id: h ?? a,
            children: o(jn, {
              animate: j,
              initial: !1,
              children: o(An, {
                value: On,
                ...Q({ rqcL3VnZ6: { value: kn } }, b, T),
                children: o(_.header, {
                  ...y,
                  ...C,
                  className: k(H, `framer-1l2jgli`, p, x),
                  "data-framer-name": `Desktop`,
                  layoutDependency: M,
                  layoutId: `eaBCOesTw`,
                  ref: i,
                  style: {
                    backdropFilter: `blur(5px)`,
                    backgroundColor: `rgba(245, 250, 255, 0)`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    boxShadow: `none`,
                    WebkitBackdropFilter: `blur(5px)`,
                    ...f,
                  },
                  variants: {
                    Iwzg9GxlV: {
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))`,
                      boxShadow: `0px 10px 17px -5px rgba(76, 80, 133, 0.2)`,
                      WebkitBackdropFilter: `none`,
                    },
                    mLYwDiNSg: {
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))`,
                      boxShadow: `0px 10px 17px -5px rgba(76, 80, 133, 0.2)`,
                      WebkitBackdropFilter: `none`,
                    },
                    rqcL3VnZ6: {
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      boxShadow: `0px 10px 17px -5px rgba(76, 80, 133, 0.2)`,
                      WebkitBackdropFilter: `none`,
                    },
                  },
                  ...Q(
                    {
                      Iwzg9GxlV: { "data-framer-name": `Variant` },
                      JiVdFNcDQ: { "data-framer-name": `Tablet` },
                      mLYwDiNSg: { "data-framer-name": `Phone Open` },
                      rqcL3VnZ6: { "data-framer-name": `Phone` },
                    },
                    b,
                    T,
                  ),
                  children: u(_.div, {
                    className: `framer-1ifjle6`,
                    "data-framer-name": `nav wrapper`,
                    layoutDependency: M,
                    layoutId: `FOBKuerTj`,
                    children: [
                      u(_.div, {
                        className: `framer-1eb7px7`,
                        "data-framer-name": `logo-and-menu-button`,
                        layoutDependency: M,
                        layoutId: `WKIDiQS85`,
                        children: [
                          o(v, {
                            height: 46,
                            ...Q(
                              {
                                mLYwDiNSg: {
                                  y:
                                    (d?.y || 0) +
                                    0 +
                                    (((d?.height || 200) - 32 - 430) / 2 +
                                      0 +
                                      0) +
                                    10 +
                                    0 +
                                    0,
                                },
                                rqcL3VnZ6: {
                                  y:
                                    (d?.y || 0) +
                                    (8 + ((d?.height || 200) - 16 - 46) / 2) +
                                    0 +
                                    0,
                                },
                              },
                              b,
                              T,
                            ),
                            children: o(E, {
                              className: `framer-hjf6js-container`,
                              layoutDependency: M,
                              layoutId: `lJFNRprZN-container`,
                              nodeId: `lJFNRprZN`,
                              rendersWithMotion: !0,
                              scopeId: `YwA1diXfH`,
                              children: o(J, {
                                height: `100%`,
                                id: `lJFNRprZN`,
                                layoutId: `lJFNRprZN`,
                                variant: `ALdnmpZK7`,
                                width: `100%`,
                              }),
                            }),
                          }),
                          re() &&
                            o(v, {
                              ...Q(
                                {
                                  mLYwDiNSg: {
                                    height: 32,
                                    width: `32px`,
                                    y:
                                      (d?.y || 0) +
                                      0 +
                                      (((d?.height || 200) - 32 - 430) / 2 +
                                        0 +
                                        0) +
                                      10 +
                                      0 +
                                      7,
                                  },
                                  rqcL3VnZ6: {
                                    height: 32,
                                    width: `32px`,
                                    y:
                                      (d?.y || 0) +
                                      (8 + ((d?.height || 200) - 16 - 46) / 2) +
                                      0 +
                                      7,
                                  },
                                },
                                b,
                                T,
                              ),
                              children: o(E, {
                                className: `framer-xrjrga-container`,
                                layoutDependency: M,
                                layoutId: `ieDdUBSno-container`,
                                nodeId: `ieDdUBSno`,
                                rendersWithMotion: !0,
                                scopeId: `YwA1diXfH`,
                                children: o(Z, {
                                  height: `100%`,
                                  id: `ieDdUBSno`,
                                  layoutId: `ieDdUBSno`,
                                  style: { height: `100%`, width: `100%` },
                                  TBgHLr7MW: F,
                                  variant: `Ox_13xhkg`,
                                  width: `100%`,
                                  ...Q(
                                    {
                                      mLYwDiNSg: {
                                        TBgHLr7MW: z,
                                        variant: `LRVn1uHTU`,
                                      },
                                    },
                                    b,
                                    T,
                                  ),
                                }),
                              }),
                            }),
                        ],
                      }),
                      U() &&
                        u(_.nav, {
                          className: `framer-1n69eui`,
                          "data-framer-name": `menu`,
                          layoutDependency: M,
                          layoutId: `BXsmFci6P`,
                          children: [
                            o(w, {
                              links: [
                                {
                                  href: {
                                    hash: `:px5h2kywq`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:px5h2kywq`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:px5h2kywq`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:px5h2kywq`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                o(v, {
                                  height: 38,
                                  ...Q(
                                    {
                                      mLYwDiNSg: {
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          (((d?.height || 200) - 32 - 430) / 2 +
                                            0 +
                                            0) +
                                          10 +
                                          76 +
                                          0 +
                                          0,
                                      },
                                    },
                                    b,
                                    T,
                                  ),
                                  children: o(E, {
                                    className: `framer-9vn8qx-container`,
                                    layoutDependency: M,
                                    layoutId: `e5_BMcjTI-container`,
                                    nodeId: `e5_BMcjTI`,
                                    rendersWithMotion: !0,
                                    scopeId: `YwA1diXfH`,
                                    children: o(q, {
                                      height: `100%`,
                                      id: `e5_BMcjTI`,
                                      layoutId: `e5_BMcjTI`,
                                      NL4yh60Hu: `Features`,
                                      TGqAsaBVG: e[0],
                                      variant: `GoqFsAI3k`,
                                      width: `100%`,
                                      ...Q(
                                        {
                                          Iwzg9GxlV: { TGqAsaBVG: e[3] },
                                          JiVdFNcDQ: { TGqAsaBVG: e[1] },
                                          mLYwDiNSg: {
                                            HiWWnC7e7: V,
                                            TGqAsaBVG: e[2],
                                          },
                                        },
                                        b,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            o(w, {
                              links: [
                                {
                                  href: {
                                    hash: `:O2UmFEWea`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:O2UmFEWea`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:O2UmFEWea`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:O2UmFEWea`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                o(v, {
                                  height: 38,
                                  ...Q(
                                    {
                                      mLYwDiNSg: {
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          (((d?.height || 200) - 32 - 430) / 2 +
                                            0 +
                                            0) +
                                          10 +
                                          76 +
                                          0 +
                                          46,
                                      },
                                    },
                                    b,
                                    T,
                                  ),
                                  children: o(E, {
                                    className: `framer-1k0ackj-container`,
                                    layoutDependency: M,
                                    layoutId: `MthTGrpMO-container`,
                                    nodeId: `MthTGrpMO`,
                                    rendersWithMotion: !0,
                                    scopeId: `YwA1diXfH`,
                                    children: o(q, {
                                      height: `100%`,
                                      id: `MthTGrpMO`,
                                      layoutId: `MthTGrpMO`,
                                      NL4yh60Hu: `Pricing`,
                                      TGqAsaBVG: e[0],
                                      variant: `GoqFsAI3k`,
                                      width: `100%`,
                                      ...Q(
                                        {
                                          Iwzg9GxlV: { TGqAsaBVG: e[3] },
                                          JiVdFNcDQ: { TGqAsaBVG: e[1] },
                                          mLYwDiNSg: {
                                            HiWWnC7e7: V,
                                            TGqAsaBVG: e[2],
                                          },
                                        },
                                        b,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            o(w, {
                              links: [
                                {
                                  href: {
                                    hash: `:aVAbPFLLv`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:aVAbPFLLv`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:aVAbPFLLv`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:aVAbPFLLv`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                o(v, {
                                  height: 38,
                                  ...Q(
                                    {
                                      mLYwDiNSg: {
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          (((d?.height || 200) - 32 - 430) / 2 +
                                            0 +
                                            0) +
                                          10 +
                                          76 +
                                          0 +
                                          92,
                                      },
                                    },
                                    b,
                                    T,
                                  ),
                                  children: o(E, {
                                    className: `framer-1jjl9vj-container`,
                                    layoutDependency: M,
                                    layoutId: `mQQpbRfB_-container`,
                                    nodeId: `mQQpbRfB_`,
                                    rendersWithMotion: !0,
                                    scopeId: `YwA1diXfH`,
                                    children: o(q, {
                                      height: `100%`,
                                      id: `mQQpbRfB_`,
                                      layoutId: `mQQpbRfB_`,
                                      NL4yh60Hu: `Industries`,
                                      TGqAsaBVG: e[0],
                                      variant: `GoqFsAI3k`,
                                      width: `100%`,
                                      ...Q(
                                        {
                                          Iwzg9GxlV: { TGqAsaBVG: e[3] },
                                          JiVdFNcDQ: { TGqAsaBVG: e[1] },
                                          mLYwDiNSg: {
                                            HiWWnC7e7: V,
                                            TGqAsaBVG: e[2],
                                          },
                                        },
                                        b,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            o(w, {
                              links: [
                                {
                                  href: {
                                    hash: `:PYmc81V8e`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:PYmc81V8e`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:PYmc81V8e`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:PYmc81V8e`,
                                    webPageId: `augiA20Il`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                o(v, {
                                  height: 38,
                                  ...Q(
                                    {
                                      mLYwDiNSg: {
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          (((d?.height || 200) - 32 - 430) / 2 +
                                            0 +
                                            0) +
                                          10 +
                                          76 +
                                          0 +
                                          138,
                                      },
                                    },
                                    b,
                                    T,
                                  ),
                                  children: o(E, {
                                    className: `framer-1pj16m2-container`,
                                    layoutDependency: M,
                                    layoutId: `oZqTD4xOF-container`,
                                    nodeId: `oZqTD4xOF`,
                                    rendersWithMotion: !0,
                                    scopeId: `YwA1diXfH`,
                                    children: o(q, {
                                      height: `100%`,
                                      id: `oZqTD4xOF`,
                                      layoutId: `oZqTD4xOF`,
                                      NL4yh60Hu: `FAQ`,
                                      TGqAsaBVG: e[0],
                                      variant: `GoqFsAI3k`,
                                      width: `100%`,
                                      ...Q(
                                        {
                                          Iwzg9GxlV: { TGqAsaBVG: e[3] },
                                          JiVdFNcDQ: { TGqAsaBVG: e[1] },
                                          mLYwDiNSg: {
                                            HiWWnC7e7: V,
                                            TGqAsaBVG: e[2],
                                          },
                                        },
                                        b,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            o(w, {
                              links: [
                                {
                                  href: {
                                    hash: `:BvppAfnk5`,
                                    webPageId: `J986jsEGO`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:BvppAfnk5`,
                                    webPageId: `J986jsEGO`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:BvppAfnk5`,
                                    webPageId: `J986jsEGO`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: `:BvppAfnk5`,
                                    webPageId: `J986jsEGO`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                o(v, {
                                  height: 38,
                                  ...Q(
                                    {
                                      mLYwDiNSg: {
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          (((d?.height || 200) - 32 - 430) / 2 +
                                            0 +
                                            0) +
                                          10 +
                                          76 +
                                          0 +
                                          184,
                                      },
                                    },
                                    b,
                                    T,
                                  ),
                                  children: o(E, {
                                    className: `framer-1nhuldr-container`,
                                    layoutDependency: M,
                                    layoutId: `T533X5u6b-container`,
                                    nodeId: `T533X5u6b`,
                                    rendersWithMotion: !0,
                                    scopeId: `YwA1diXfH`,
                                    children: o(q, {
                                      height: `100%`,
                                      id: `T533X5u6b`,
                                      layoutId: `T533X5u6b`,
                                      NL4yh60Hu: `Contact`,
                                      TGqAsaBVG: e[0],
                                      variant: `GoqFsAI3k`,
                                      width: `100%`,
                                      ...Q(
                                        {
                                          Iwzg9GxlV: { TGqAsaBVG: e[3] },
                                          JiVdFNcDQ: { TGqAsaBVG: e[1] },
                                          mLYwDiNSg: {
                                            HiWWnC7e7: V,
                                            TGqAsaBVG: e[2],
                                          },
                                        },
                                        b,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                            o(w, {
                              links: [
                                {
                                  href: { webPageId: `IGP28tJuK` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `IGP28tJuK` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `IGP28tJuK` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: `IGP28tJuK` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                o(v, {
                                  height: 38,
                                  ...Q(
                                    {
                                      mLYwDiNSg: {
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          (((d?.height || 200) - 32 - 430) / 2 +
                                            0 +
                                            0) +
                                          10 +
                                          76 +
                                          0 +
                                          230,
                                      },
                                    },
                                    b,
                                    T,
                                  ),
                                  children: o(E, {
                                    className: `framer-trvcyt-container`,
                                    layoutDependency: M,
                                    layoutId: `Tzb2phtH5-container`,
                                    nodeId: `Tzb2phtH5`,
                                    rendersWithMotion: !0,
                                    scopeId: `YwA1diXfH`,
                                    children: o(q, {
                                      height: `100%`,
                                      id: `Tzb2phtH5`,
                                      layoutId: `Tzb2phtH5`,
                                      NL4yh60Hu: `Blog`,
                                      TGqAsaBVG: e[0],
                                      variant: `GoqFsAI3k`,
                                      width: `100%`,
                                      ...Q(
                                        {
                                          Iwzg9GxlV: { TGqAsaBVG: e[3] },
                                          JiVdFNcDQ: { TGqAsaBVG: e[1] },
                                          mLYwDiNSg: {
                                            HiWWnC7e7: V,
                                            TGqAsaBVG: e[2],
                                          },
                                        },
                                        b,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      U() &&
                        o(_.div, {
                          className: `framer-5lv2a4`,
                          "data-framer-name": `call-to-actions`,
                          layoutDependency: M,
                          layoutId: `uz6_Jwhzt`,
                          children: o(v, {
                            height: 46,
                            ...Q(
                              {
                                mLYwDiNSg: {
                                  y:
                                    (d?.y || 0) +
                                    0 +
                                    (((d?.height || 200) - 32 - 430) / 2 +
                                      0 +
                                      0) +
                                    10 +
                                    374 +
                                    0,
                                },
                              },
                              b,
                              T,
                            ),
                            children: o(E, {
                              className: `framer-yjzy8o-container`,
                              layoutDependency: M,
                              layoutId: `Z1ECs6CUR-container`,
                              nodeId: `Z1ECs6CUR`,
                              rendersWithMotion: !0,
                              scopeId: `YwA1diXfH`,
                              children: o(G, {
                                cRoeZpcrs: `Try Gerbo Live`,
                                GrpQ8zFBL: `tel:+441202144844`,
                                height: `100%`,
                                id: `Z1ECs6CUR`,
                                layoutId: `Z1ECs6CUR`,
                                RCPR2dydG: `PhoneCall`,
                                RZWvw5mQ_: !0,
                                variant: `mmH9oevh3`,
                                width: `100%`,
                                ...Q({ mLYwDiNSg: { dG05QQM_v: te } }, b, T),
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          })
        );
      })),
      (In = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-7WbiA.framer-11q42zn, .framer-7WbiA .framer-11q42zn { display: block; }`,
        `.framer-7WbiA.framer-1l2jgli { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 8px 32px 8px 32px; position: relative; width: 1200px; }`,
        `.framer-7WbiA .framer-1ifjle6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 24px 0px 0px; position: relative; width: 1136px; z-index: 2; }`,
        `.framer-7WbiA .framer-1eb7px7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-7WbiA .framer-hjf6js-container, .framer-7WbiA .framer-9vn8qx-container, .framer-7WbiA .framer-1k0ackj-container, .framer-7WbiA .framer-1jjl9vj-container, .framer-7WbiA .framer-1pj16m2-container, .framer-7WbiA .framer-1nhuldr-container, .framer-7WbiA .framer-trvcyt-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-7WbiA .framer-xrjrga-container { flex: none; height: 32px; position: absolute; right: -223px; top: calc(50.00000000000002% - 32px / 2); width: 32px; z-index: 1; }`,
        `.framer-7WbiA .framer-1n69eui { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-7WbiA .framer-5lv2a4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-7WbiA .framer-yjzy8o-container { flex: none; height: auto; position: relative; width: auto; z-index: 3; }`,
        `.framer-7WbiA.framer-v-1v8mrgg.framer-1l2jgli { padding: 8px 20px 16px 20px; width: 810px; }`,
        `.framer-7WbiA.framer-v-1id01nq.framer-1l2jgli { gap: 0px; justify-content: center; overflow: hidden; padding: 8px 0px 8px 0px; width: 390px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-7WbiA.framer-v-1id01nq .framer-1ifjle6 { flex: 1 0 0px; flex-wrap: nowrap; padding: 0px 14px 0px 10px; width: 1px; }`,
        `.framer-7WbiA.framer-v-1id01nq .framer-1eb7px7 { flex: 1 0 0px; gap: unset; justify-content: space-between; width: 1px; }`,
        `.framer-7WbiA.framer-v-1id01nq .framer-hjf6js-container { order: 0; }`,
        `.framer-7WbiA.framer-v-1id01nq .framer-xrjrga-container { order: 1; position: relative; right: unset; top: unset; }`,
        `.framer-7WbiA.framer-v-v8k0ym.framer-1l2jgli { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; justify-content: center; overflow: hidden; padding: 0px 10px 32px 10px; width: 390px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-7WbiA.framer-v-v8k0ym .framer-1ifjle6 { flex-direction: column; gap: 30px 10px; justify-content: center; padding: 10px 0px 0px 0px; width: 100%; }`,
        `.framer-7WbiA.framer-v-v8k0ym .framer-1eb7px7 { gap: unset; justify-content: space-between; width: 100%; }`,
        `.framer-7WbiA.framer-v-v8k0ym .framer-xrjrga-container { position: relative; right: unset; top: unset; }`,
        `.framer-7WbiA.framer-v-v8k0ym .framer-1n69eui { flex-direction: column; }`,
        `.framer-7WbiA.framer-v-v8k0ym .framer-5lv2a4 { width: 166px; }`,
        `.framer-7WbiA.framer-v-2ts7qe.framer-1l2jgli { width: 902px; }`,
        `.framer-7WbiA.framer-v-2ts7qe .framer-1ifjle6 { width: 840px; }`,
      ]),
      ($ = V(Fn, In, `framer-7WbiA`)),
      ($.displayName = `nav / navbar`),
      ($.defaultProps = { height: 62.4, width: 1200 }),
      O($, {
        variant: {
          options: [
            `eaBCOesTw`,
            `JiVdFNcDQ`,
            `rqcL3VnZ6`,
            `mLYwDiNSg`,
            `Iwzg9GxlV`,
          ],
          optionTitles: [`Desktop`, `Tablet`, `Phone`, `Phone Open`, `Variant`],
          title: `Variant`,
          type: y.Enum,
        },
      }),
      D($, [{ explicitInter: !0, fonts: [] }, ...xn, ...Sn, ...Cn, ...wn], {
        supportsExplicitInterCodegen: !0,
      });
  });
export {
  $ as FramerYwA1diXfH,
  G as FramerbVvbBzZqE,
  X as FramerlicEmhkfK,
  oe as House_default,
  it as Icon,
  W as Icon$1,
  H as NullState,
  Qe as className,
  we as className$1,
  be as className$2,
  Ze as css,
  Ce as css$1,
  ye as css$2,
  ue as defaultEvents,
  Xe as fonts,
  Se as fonts$1,
  ve as fonts$2,
  ce as getIconSelection,
  xe as init_C0wa976Zp,
  $e as init_CO_HimyHZ,
  se as init_House_js_0_0,
  _e as init_Phosphor,
  Te as init_StOoogDYM,
  at as init_VWXKKteE7,
  Ln as init_YwA1diXfH,
  Be as init_bVvbBzZqE,
  re as init_icon_nullstate_js_0_7,
  sn as init_licEmhkfK,
  fe as init_utils,
  le as useIconSelection,
};
//# sourceMappingURL=shared-lib.BgYLzAGg.mjs.map
